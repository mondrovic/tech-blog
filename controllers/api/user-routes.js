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

module.exports = router;
