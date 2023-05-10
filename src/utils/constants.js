const myProfileImage = require("../images/question.png");
const myCartImage = require("../images/cart.png");
const customerServiceImage = require("../images/question.png");

const contactInfo = {
  EMAIL: "email@email.com",
  PHONE_MAIN: "(000) 000-0000",
  ADDRESS: "4242 E Imaginary Dr",
  CITY: "Olathe",
  STATE: "Kansas",
  ZIP: "66062",
  LINKEDIN: "https://www.linkedin.com/in/david-miles-a75a999a/",
};

const productCatalog = [
  { text: "Cool", path: "cool" },
  { text: "Neat", path: "neat" },
  { text: "Awesome", path: "awesome" },
];

const userDropdown = [
  { text: "My Profile", path: "/building", image: "user" },
  { text: "My Cart", path: "/cart", image: myCartImage },
  {
    text: "Customer Service",
    path: "/building",
    image: customerServiceImage,
  },
  { text: "Log Out", path: "logout", image: "door" },
];

export { contactInfo, productCatalog, userDropdown };
