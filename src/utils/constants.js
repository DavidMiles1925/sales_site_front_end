const ABOUT_US_WHAT_WE_DO =
  "We check out the latest games and bring you tips, tricks, and ideas for those players who maybe unable to use the controller the same way as other players.";
const ABOUT_US_WHERE_WE_CAME_FROM =
  "We are from a Olathe, a suburb of Kansas City. Ben was born with cerebral palsy, but that has never stopped him tackling a video game! We love to play together, and we decided we would share our fun times with the world.";
const ABOUT_US_OUR_PLEDGE =
  "Our goal is to bring you high quality entertainment, while providing you with the best adaptive tips for multi-abled players.";

const STILL_BUILDING_TEXT_UPPER =
  "The feature you selected is not part of the scope of this project.";
const STILL_BUILDING_TEXT_LOWER =
  "Check out our readme to see what our plans are for the future!";

const contactInfo = {
  EMAIL: "davidmiles1925@gmail.com",
  PHONE_MAIN: "(913) 284-6535",
  ADDRESS: "4242 E Imaginary Dr",
  CITY: "Olathe",
  STATE: "Kansas",
  ZIP: "66062",
  LINKEDIN: "https://www.linkedin.com/in/david-miles-a75a999a/",
};

const productCatalog = [
  { text: "Hats", path: "hats" },
  { text: "T-Shirts", path: "tshirts" },
  { text: "Hoodies", path: "hoodies" },
];

const userDropdown = [
  { text: "My Profile", path: "/userprofile" },
  { text: "My Cart", path: "/userprofile/usercart" },
  {
    text: "Customer Service",
    path: "/building",
  },
  { text: "Log Out", path: "logout" },
];

const userSidebar = [
  { text: "Your Cart", path: "/userprofile/usercart" },
  { text: "Your Information", path: "/userprofile/building" },
  {
    text: "Your Orders",
    path: "/userprofile/building",
  },
  { text: "Log In and Security", path: "/userprofile/building" },
];

export {
  contactInfo,
  productCatalog,
  userDropdown,
  userSidebar,
  ABOUT_US_WHAT_WE_DO,
  ABOUT_US_WHERE_WE_CAME_FROM,
  ABOUT_US_OUR_PLEDGE,
  STILL_BUILDING_TEXT_UPPER,
  STILL_BUILDING_TEXT_LOWER,
};
