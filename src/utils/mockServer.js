const database = {
  users: [
    {
      _id: "001",
      email: "frodobaggins@host.com",
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
      name: "Transmogrofier",
      description:
        "We found this under the kitchen sink. Whatever this thing is, it seems really useful. So far we've used it empty the litter box, clean the gutters, and remove the tops from our strawberries.",
      price: "999.99",
      image: "./images/transmogrofier.jpg",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      _id: "002",
      name: "Transmogrofier",
      description:
        "We found this under the kitchen sink. Whatever this thing is, it seems really useful. So far we've used it empty the litter box, clean the gutters, and remove the tops from our strawberries.",
      price: "999.99",
      image: "./images/transmogrofier.jpg",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      _id: "003",
      name: "Transmogrofier",
      description:
        "We found this under the kitchen sink. Whatever this thing is, it seems really useful. So far we've used it empty the litter box, clean the gutters, and remove the tops from our strawberries.",
      price: "999.99",
      image: "./images/transmogrofier.jpg",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  ],
};

export { database };
