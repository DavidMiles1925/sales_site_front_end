const whiteTShirtImage = require("../images/merch/white-t.png");
const blackTShirtImage = require("../images/merch/black-t.png");
const whiteHatImage = require("../images/merch/white-hat.png");
const blackHatImage = require("../images/merch/black-hat.png");
const whiteHoodieImage = require("../images/merch/white-hoodie.png");

const database = {
  users: [
    {
      _id: "001",
      admin: "false",
      email: "user@host.com",
      password: "password",
      name: "Frodo Baggins",
      phone: "1234567890",
      address: {
        street: "1600 Pennsylvania Ave",
        apt: "42",
        city: "The Shire",
        state: "Florida",
        zip: "80085",
      },
      cart: ["002", "003"],
    },
    {
      _id: "002",
      admin: "true",
      email: "frodobaggins@hobbitbook.com",
      password: "password",
      name: "Frodo Baggins",
      phone: "1234567890",
      address: {
        street: "1600 Pennsylvania Ave",
        apt: "42",
        city: "The Shire",
        state: "Florida",
        zip: "80085",
      },
      cart: [],
    },
  ],
  products: [
    {
      _id: "001",
      name: "Ben Miles & The Dad White T-Shirt",
      description:
        "The classic T-Shirt. Wear it when you want to channel some of that awesome Ben Energy.",
      price: "24.99",
      image: whiteTShirtImage,
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      category: "tshirts",
    },
    {
      _id: "002",
      name: "Ben Miles & The Dad Black T-Shirt",
      description:
        "The classic T-Shirt. Wear it when you want to channel some of that awesome Ben Energy.",
      price: "24.99",
      image: blackTShirtImage,
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      category: "tshirts",
    },
    {
      _id: "003",
      name: "Ben Miles & The White Hat",
      description:
        "The classic Hat. Wear it when you want to channel some of that awesome Ben Energy.",
      price: "34.99",
      image: whiteHatImage,
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      category: "hats",
    },
    {
      _id: "004",
      name: "Ben Miles & The Dad Black Hat",
      description:
        "The classic Hat. Wear it when you want to channel some of that awesome Ben Energy.",
      price: "34.99",
      image: blackHatImage,
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      category: "hats",
    },
    {
      _id: "005",
      name: "Ben Miles & The Dad White Hoodie",
      description:
        "The classic Hat. Wear it when you want to channel some of that awesome Ben Energy.",
      price: "39.99",
      image: whiteHoodieImage,
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      category: "hoodies",
    },
  ],
};

export { database };

/*
const transmogrofierImage = require("../images/transmogrofier.jpg");
const ultimateIceCubeImage = require("../images/ultimate_ice_cubes.jpg");
const personalStormTrooperImage = require("../images/personal_stormtrooper.jpg");
const combatControlImage = require("../images/combat_control.jpg");
const FoldinatorImage = require("../images/foldinator.jpg");
const PowerWheelsAdvancedImage = require("../images/power_wheels_advanced.jpg");
const smartGloveImage = require("../images/smart_glove.jpg");
const handheldCloudServerImage = require("../images/handheld_cloud_server.jpg");
const wizamodingleImage = require("../images/wizamodingle.jpg");
const plumbingAiImage = require("../images/bathroom_ai.jpg");

products: [
    {
      _id: "001",
      name: "Amazing Transmogrifier",
      description:
        "We found this under the kitchen sink. Whatever this thing is, it seems really useful. So far we've used it to empty the litter box, clean the gutters, and remove the tops from our strawberries.",
      price: "999.99",
      image: transmogrofierImage,
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      category: "cool",
    },
    {
      _id: "002",
      name: "Ultimate Ice Cubes",
      description:
        "These miraculous cubes are God's gift to the 'moderate' drinker. Features a 10 hour battery life, and autommatic powerdown upon user loss of consciousness. Coaster for wireless charging sold seperately.",
      price: "69.99",
      image: ultimateIceCubeImage,
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      category: "neat",
    },
    {
      _id: "003",
      name: "Personal Stormtrooper",
      description:
        "The first and only miniature soldier to do your bidding. Need to strike fear into the heart of your enemies? They'll never see this guy coming. Best of all no one gets hurt due to our little friend's abhorent aim.",
      price: "2,999.99",
      image: personalStormTrooperImage,
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      category: "awesome",
    },
    {
      _id: "004",
      name: "Combat Control (Home Edition)",
      description:
        "Need to get a leg up on those pesky squirrels in your yard? Nothing is more effective than a military drone strike! With our state-of-the-art Combat Control system, a safer neighborhood is always in sight.",
      price: "25,999.99",
      image: combatControlImage,
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      category: "cool",
    },
    {
      _id: "005",
      name: "Foldinator",
      description:
        "Our guys at R&D have really outdone themselves with this one. I forgot what it does, but I'm told it's very good. The best.",
      price: "2.99",
      image: FoldinatorImage,
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      category: "neat",
    },
    {
      _id: "006",
      name: "Power Wheels Advanced",
      description:
        "Little Timmy will be thrilled to see his brand new Power Wheels Advanced under the tree this year. No need to walk him to school anymore. This 400cc engine is paired with a built in bike lock.",
      price: "879.99",
      image: PowerWheelsAdvancedImage,
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      category: "awesome",
    },
    {
      _id: "007",
      name: "Smart Glove",
      description:
        "A great way to add one more piece of wearalbe technology, and really stress out your phone's Bluetooth connection.",
      price: "999.99",
      image: smartGloveImage,
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      category: "cool",
    },
    {
      _id: "008",
      name: "Handheld Cloud Server",
      description:
        "Carry around a little piece of the sky when you purchase the all new Handheld Cloud Server. You'll even still have one free hand for your Starbucks decaf latte.",
      price: "289.99",
      image: handheldCloudServerImage,
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      category: "neat",
    },
    {
      _id: "009",
      name: "Wizamodingle",
      description: "Unleash the power.",
      price: "0.99",
      image: wizamodingleImage,
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      category: "awesome",
    },
    {
      _id: "010",
      name: "Plumbing AI",
      description:
        "A helpful assistant to manage all of your plumbing needs. Almost out of hot water? Our AI will shout at you through the bathroom door to warn you. Time to snake the drain? Plumbing AI can crack poop jokes while you do it to make the process more enjoyable.",
      price: "99.99",
      image: plumbingAiImage,
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      category: "cool",
    },
  ], 
*/
