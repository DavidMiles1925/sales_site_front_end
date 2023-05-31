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
  { text: "Hats", path: "hats" },
  { text: "T-Shirts", path: "shirts" },
  { text: "Hoodies", path: "hoodies" },
];

const userDropdown = [
  { text: "My Profile", path: "/userprofile/userinfo", image: "user" },
  { text: "My Cart", path: "/userprofile/usercart", image: myCartImage },
  {
    text: "Customer Service",
    path: "/building",
    image: customerServiceImage,
  },
  { text: "Log Out", path: "", image: "door" },
];

const userSidebar = [
  { text: "Your Cart", path: "/userprofile/usercart" },
  { text: "Your Information", path: "/userprofile/userinfo" },
  {
    text: "Your Orders",
    path: "/userprofile/building",
  },
  { text: "Log In and Security", path: "/userprofile/building" },
];

export { contactInfo, productCatalog, userDropdown, userSidebar };
