const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

router.get("/", (req, res) => {
  User.findAll({
    // prevents password from being returned in response
    attributes: { exclude: ["password"] },
  })
    .then((dbData) => res.json(dbData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  User.findOne({
    // prevents password from being returned in response
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
    // includes User's posts with corresponding columns
    include: [
      {
        model: Post,
        attributes: ["id", "title", "post_url", "created_at"],
      },
      // includes user's comments with associated post title
      {
        model: Comment,
        attributes: ["id", "comment_body", "created_at"],
        include: {
          model: Post,
          attributes: ["title"],
        },
      },
    ],
  })
    .then((dbData) => {
      if (!dbData) {
        res.status(404).json({ message: "No user with that ID found" });
        return;
      }
      res.json(dbData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  // creates user. Must have unique email and username
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbData) => {
      // saves session
      req.session.save(() => {
        req.session.user_id = dbData.id;
        req.session.username = dbData.username;
        req.session.loggedIn = true;

        res.json(dbData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  /*
  {
    "username": "new_username",
    "email": "new_email",
    "password": "new_password"
  }
  */
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
    .then((dbData) => {
      if (!dbData) {
        res.status(404).json({ message: "No user found with that ID" });
        return;
      }

      res.json(dbData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// route to login
router.post("/login", (req, res) => {
  /*
  {
    email: "email@some.com",
    password: "admin123"
  }
  */
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((dbData) => {
    if (!dbData) {
      res.status(400).json({ message: "No user with that email address!" });
      return;
    }
    const validPassword = dbData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }
    req.session.save(() => {
      req.session.user_id = dbData.id;
      req.session.username = dbData.username;
      req.session.loggedIn = true;

      res.json({ user: dbData, message: "You are now logged in!" });
    });
  });
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbData) => {
      if (!dbData) {
        res.status(404).json({ message: "No user found with that ID" });
        return;
      }
      res.json(dbData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
