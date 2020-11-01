const { Comment } = require("../models");

// randomly generated sentences for comments (42)

const commentseeds = [
  {
    comment_body: "Shakespeare was a famous 17th-century diesel mechanic.",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_body:
      "Sometimes it is better to just walk away from things and go back to them later when you’re in a better frame of mind.",
    user_id: 1,
    post_id: 4,
  },
  {
    comment_body:
      "The pet shop stocks everything you need to keep your anaconda happy.",
    user_id: 1,
    post_id: 6,
  },
  {
    comment_body: "He was an introvert that extroverts seemed to love.",
    user_id: 2,
    post_id: 3,
  },
  {
    comment_body:
      "Flesh-colored yoga pants were far worse than even he feared.",
    user_id: 2,
    post_id: 5,
  },
  {
    comment_body: "He put heat on the wound to see what would grow.",
    user_id: 2,
    post_id: 7,
  },
  {
    comment_body:
      "When I cook spaghetti, I like to boil it a few minutes past al dente so the noodles are super slippery.",
    user_id: 3,
    post_id: 1,
  },
  {
    comment_body:
      "The fifty mannequin heads floating in the pool kind of freaked them out.",
    user_id: 3,
    post_id: 1,
  },
  {
    comment_body: "She cried diamonds.",
    user_id: 4,
    post_id: 1,
  },
  {
    comment_body: "The fish listened intently to what the frogs had to say.",
    user_id: 5,
    post_id: 10,
  },
  {
    comment_body:
      "They ran around the corner to find that they had traveled back in time.",
    user_id: 5,
    post_id: 8,
  },
  {
    comment_body:
      "She had that tint of craziness in her soul that made her believe she could actually make a difference.",
    user_id: 5,
    post_id: 9,
  },
  {
    comment_body: "Three years later, the coffin was still full of Jello.",
    user_id: 6,
    post_id: 11,
  },
  {
    comment_body:
      "He would only survive if he kept the fire going and he could hear thunder in the distance.",
    user_id: 6,
    post_id: 12,
  },
  {
    comment_body:
      "You realize you're not alone as you sit in your bedroom massaging your calves after a long day of playing tug-of-war with Grandpa Joe in the hospital.",
    user_id: 6,
    post_id: 14,
  },
  {
    comment_body: "I’m working on a sweet potato farm.",
    user_id: 6,
    post_id: 13,
  },
  {
    comment_body:
      "He found his art never progressed when he literally used his sweat and tears.",
    user_id: 6,
    post_id: 15,
  },
  {
    comment_body: "Joe made the sugar cookies; Susan decorated them.",
    user_id: 7,
    post_id: 17,
  },
  {
    comment_body:
      "Even with the snow falling outside, she felt it appropriate to wear her bikini.",
    user_id: 7,
    post_id: 16,
  },
  {
    comment_body:
      "I thought red would have felt warmer in summer but I didn't think about the equator.",
    user_id: 7,
    post_id: 18,
  },
  {
    comment_body:
      "The murder hornet was disappointed by the preconceived ideas people had of him.",
    user_id: 8,
    post_id: 19,
  },
  {
    comment_body: "Sixty-Four comes asking for bread.",
    user_id: 8,
    post_id: 20,
  },
  {
    comment_body:
      "When she didn’t like a guy who was trying to pick her up, she started using sign language.",
    user_id: 8,
    post_id: 20,
  },
  {
    comment_body: "Don't step on the broken glass.",
    user_id: 8,
    post_id: 15,
  },
  {
    comment_body:
      "He realized there had been several deaths on this road, but his concern rose when he saw the exact number.",
    user_id: 8,
    post_id: 9,
  },
  {
    comment_body:
      "Malls are great places to shop; I can find everything I need under one roof.",
    user_id: 8,
    post_id: 16,
  },
  {
    comment_body:
      "Thigh-high in the water, the fisherman’s hope for dinner soon turned to despair.",
    user_id: 9,
    post_id: 14,
  },
  {
    comment_body: "Andy loved to sleep on a bed of nails.",
    user_id: 9,
    post_id: 12,
  },
  {
    comment_body: "Courage and stupidity were all he had.",
    user_id: 9,
    post_id: 11,
  },
  {
    comment_body: "He was sure the Devil created red sparkly glitter.",
    user_id: 9,
    post_id: 5,
  },
  {
    comment_body:
      "I purchased a baby clown from the Russian terrorist black market.",
    user_id: 1,
    post_id: 18,
  },
  {
    comment_body:
      "He was the type of guy who liked Christmas lights on his house in the middle of July.",
    user_id: 2,
    post_id: 16,
  },
  {
    comment_body:
      "They ran around the corner to find that they had traveled back in time.",
    user_id: 4,
    post_id: 13,
  },
  {
    comment_body: "They got there early, and they got really good seats.",
    user_id: 3,
    post_id: 12,
  },
  {
    comment_body:
      "If any cop asks you where you were, just say you were visiting Kansas.",
    user_id: 7,
    post_id: 2,
  },
  {
    comment_body:
      "The Guinea fowl flies through the air with all the grace of a turtle.",
    user_id: 5,
    post_id: 4,
  },
  {
    comment_body:
      "The elephant didn't want to talk about the person in the room.",
    user_id: 7,
    post_id: 5,
  },
  {
    comment_body: "There was coal in his stocking and he was thrilled.",
    user_id: 8,
    post_id: 19,
  },
  {
    comment_body:
      "He learned the hardest lesson of his life and had the scars, both physical and mental, to prove it.",
    user_id: 4,
    post_id: 8,
  },
  {
    comment_body:
      "I'm a great listener, really good with empathy vs sympathy and all that, but I hate people.",
    user_id: 5,
    post_id: 4,
  },
  {
    comment_body:
      "He wore the surgical mask in public not to keep from catching a virus, but to keep people away from him.",
    user_id: 3,
    post_id: 19,
  },
  {
    comment_body:
      "The tears of a clown make my lipstick run, but my shower cap is still intact.",
    user_id: 2,
    post_id: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentseeds);

module.exports = seedComments;
