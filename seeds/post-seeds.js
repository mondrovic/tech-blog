const { Post } = require("../models");

// randomly generated websites and sentences (20)
const postseeds = [
  {
    title: "Cats are good pets, for they are clean and are not noisy.",
    post_url: "https://ensom.com",
    user_id: 1,
  },
  {
    title:
      "I liked their first two albums but changed my mind after that charity gig.",
    post_url: "https://www.humai.com",
    user_id: 4,
  },
  {
    title: "Smoky the Bear secretly started the fires.",
    post_url: "https://balafy.com",
    user_id: 6,
  },
  {
    title:
      "The white water rafting trip was suddenly halted by the unexpected brick wall.",
    post_url: "https://www.chirp.com",
    user_id: 2,
  },
  {
    title: "The lyrics of the song sounded like fingernails on a chalkboard.",
    post_url: "https://ayary.com",
    user_id: 2,
  },
  {
    title: "He was sure the Devil created red sparkly glitter.",
    post_url: "https://necetom.com",
    user_id: 3,
  },
  {
    title: "Today I heard something new and unmemorable.",
    post_url: "https://www.dunus.com",
    user_id: 7,
  },
  {
    title: "The father died during childbirth.",
    post_url: "https://nyeany.com",
    user_id: 1,
  },
  {
    title: "Erin accidentally created a new universe.",
    post_url: "https://ibatol.com",
    user_id: 4,
  },
  {
    title:
      "Everyone was curious about the large white blimp that appeared overnight.",
    post_url: "https://ungraq.com",
    user_id: 5,
  },
  {
    title:
      "Green should have smelled more tranquil, but somehow it just tasted rotten.",
    post_url: "https://endarei.com",
    user_id: 5,
  },
  {
    title: "The ants enjoyed the barbecue more than the family.",
    post_url: "https://addago.com",
    user_id: 6,
  },
  {
    title:
      "She was too busy always talking about what she wanted to do to actually do any of it.",
    post_url: "https://www.begar.com",
    user_id: 8,
  },
  {
    title:
      "After exploring the abandoned building, he started to believe in ghosts.",
    post_url: "https://www.sling.com",
    user_id: 7,
  },
  {
    title: "The best key lime pie is still up for debate.",
    post_url: "https://twimmo.com",
    user_id: 4,
  },
  {
    title: "Check back tomorrow; I will see if the book has arrived.",
    post_url: "https://www.ruthado.com",
    user_id: 7,
  },
  {
    title:
      "Random words in front of other random words create a random sentence.",
    post_url: "https://plailna.com",
    user_id: 1,
  },
  {
    title: "All they could see was the blue water surrounding their sailboat.",
    post_url: "https://chidwinem.com",
    user_id: 3,
  },
  {
    title:
      "She looked at the masterpiece hanging in the museum but all she could think is that her five-year-old could do better.",
    post_url: "https://www.caunaw.com",
    user_id: 8,
  },
  {
    title:
      "The complicated school homework left the parents trying to help their kids quite confused.",
    post_url: "https://oderphy.com",
    user_id: 2,
  },
];

// create posts from postseeds
const seedPosts = () => Post.bulkCreate(postseeds);

module.exports = seedPosts;
