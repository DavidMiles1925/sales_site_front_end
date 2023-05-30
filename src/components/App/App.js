// ********** Tools **********
import { Route, Switch, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { errorMessageHandler } from "../../contexts/ValidationContext";

// ********** API **********
import { database } from "../../utils/mockServer";
import {
  signup,
  signin,
  checkToken,
  updateUser,
  addToCart,
  removeFromCart,
} from "../../utils/auth";

// ********** Contexts **********
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { ValidationContext } from "../../contexts/ValidationContext";

// ********** Page Components **********
import Header from "../Header/Header";
import Main from "../Main/Main";
import AboutUs from "../AboutUs/AboutUs";
import ProductsPage from "../ProductsPage/ProductsPage";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Footer from "../Footer/Footer";
import StillBuilding from "../StillBuilding/StillBuilding";
import DeveloperPanel from "../DeveloperPanel/DeveloperPanel";

// ********** Modals **********
import { userDropdown } from "../../utils/constants";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import UserUpdateProfileModal from "../UserUpdateProfileModal/UserUpdateProfileModal";
import ProductViewModal from "../ProductViewModal/ProductViewModal";

// ********** Styles **********
import "../../fonts/fonts.css";
import "./App.css";
import UserProfilePage from "../UserProfilePage/UserProfilePage";
import { getProducts } from "../../utils/api";
import UserInformationPage from "../UserInformationPage/UserInformationPage";

const App = () => {
  // ********** Developer Tools **********
  const [isDevMode, setIsDevMode] = useState(false);

  // ********** Server **********
  const [productList, setProductList] = useState([]);

  // ********** User Context **********
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeMenuSelection, setActiveMenuSelection] = useState({});
  const [alternateAvatar, setAlternateAvatar] = useState("");

  // ********** Active Modal **********
  const [activeModal, setActiveModal] = useState("T");
  const [activeCard, setActiveCard] = useState({});
  const [disableButton, setDisableButton] = useState(true);
  const [errorDisplay, setErrorDisplay] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  function getUserFirstLetter(name) {
    const firstletter = name.slice(0, 1);
    return firstletter;
  }

  // ********** User Selections **********
  function selectLogin() {
    setActiveModal("login");
  }

  function selectSignUp() {
    setActiveModal("signup");
  }

  function handleCardClick(card) {
    setActiveModal("productpreview");
    setActiveCard(card);
  }

  function selectUpdate() {
    setActiveModal("update");
  }

  // ********** Submission Handlers **********
  function handleLoginSubmit({ email, password }) {
    setIsLoading(true);

    const user = { email, password };

    signin(user)
      .then((res) => {
        localStorage.setItem("token", res.token);

        checkToken(res.token).then((res) => {
          setCurrentUser(JSON.parse(JSON.stringify(res.data)));
          setIsLoggedIn(true);
          setAlternateAvatar(getUserFirstLetter(res.data.name));
          setActiveMenuSelection(userDropdown[0]);
          history.push("/");
        });

        closeModal();
      })
      .catch((err) => {
        handleModalErrorDisplay(true, errorMessageHandler(err));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleSignUpSubmit(values) {
    setIsLoading(true);

    const { email, password } = values;

    signup(values)
      .then((res) => {
        handleLoginSubmit({ email, password });
        closeModal();
      })
      .catch((err) => {
        handleModalErrorDisplay(true, errorMessageHandler(err));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleUpdateSubmit(values) {
    setIsLoading(true);

    const { name, phone, street, apt, city, state, zip } = values;

    const address = { street, apt, city, state, zip };

    const token = localStorage.getItem("token");

    updateUser({ name, phone, address, token })
      .then((res) => {
        setCurrentUser(res.data);
        closeModal();
      })
      .catch((err) => {
        handleModalErrorDisplay(true, errorMessageHandler(err));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleLogOut() {
    localStorage.removeItem("token");
    setCurrentUser({});
    setAlternateAvatar("");
    setIsLoggedIn(false);
    history.push("/");
  }

  function handleToggleLogin() {
    setIsLoggedIn(!isLoggedIn);
    setActiveMenuSelection(userDropdown[0]);
  }

  function handleToggleAdmin() {
    setIsAdmin(!isAdmin);
  }

  function handleAddToCart(_id) {
    if (isLoggedIn) {
      const token = localStorage.getItem("token");
      addToCart(_id, token)
        .then((user) => {
          setCurrentUser(user);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setActiveModal("signup");
    }
  }

  function handleRemoveFromCart(_id) {
    const token = localStorage.getItem("token");
    removeFromCart(_id, token)
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // ********** Modal Tools **********

  function closeActiveModal(evt) {
    if (
      evt.target.classList.contains("modal") ||
      evt.target.classList.contains("modal__close") ||
      evt.target.classList.contains("modal__cancel")
    ) {
      closeModal();
    }
  }

  function closeModal() {
    setActiveModal(null);
    handleModalErrorDisplay(false, "");
  }

  function handleModalErrorDisplay(value, message) {
    setErrorDisplay({ value, message });
  }

  // ********** Authentication **********
  function getLocalToken() {
    try {
      const jwt = localStorage.getItem("token");
      return jwt;
    } catch {
      return null;
    }
  }

  function checkAccess() {
    const jwt = getLocalToken();

    if (jwt) {
      checkToken(jwt)
        .then((res) => {
          setCurrentUser(JSON.parse(JSON.stringify(res.data)));
          setAlternateAvatar(getUserFirstLetter(res.data.name));
          setIsLoggedIn(true);
          history.push("/");
        })
        .catch((err) => {
          console.log("No token found ", err.message);
          handleModalErrorDisplay(true, errorMessageHandler(err));
        });
    }
  }

  // ********** Listeners **********
  useEffect(() => {
    setCurrentUser({ cart: [] });
  }, []);

  useEffect(() => {
    setActiveMenuSelection(userDropdown[0]);
  }, []);

  /*
  useEffect(() => {
    setProductList(database.products);
  }, []);
*/

  useEffect(() => {
    getProducts()
      .then((products) => {
        setProductList(products);
      })
      .catch((err) => {
        console.log("error occured");
      });
  }, []);

  useEffect(() => {
    checkAccess();
  }, []);

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  return (
    <div className='App'>
      <CurrentUserContext.Provider
        value={{
          currentUser,
          alternateAvatar,
          isLoggedIn,
          activeMenuSelection,
          isAdmin,
          isDevMode,
          handleLogOut,
          setActiveMenuSelection,
        }}
      >
        <Header
          selectLogin={selectLogin}
          selectSignUp={selectSignUp}
          history={history}
        />
        {isDevMode ? (
          <DeveloperPanel
            handleToggleLogin={handleToggleLogin}
            handleToggleAdmin={handleToggleAdmin}
          />
        ) : (
          <></>
        )}
        <Switch>
          <Route path='/about'>
            <AboutUs />
          </Route>
          <Route path='/building'>
            <StillBuilding />
          </Route>
          <Route path='/cart'>
            <ShoppingCart />
          </Route>
          <Route path='/main'>
            <Main />
          </Route>
          <Route path='/products'>
            <ProductsPage
              productList={productList}
              handleCardClick={handleCardClick}
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          </Route>

          <Route path='/userprofile'>
            <div className='app__profile-page-container'>
              <UserProfilePage history={history} />
              <Switch>
                <Route exact path='/userprofile/building'>
                  <StillBuilding />
                </Route>
                <Route exact path='/userprofile/userinfo'>
                  <UserInformationPage setActiveModal={setActiveModal} />
                </Route>
                <Route exact path='/userprofile/usercart'>
                  <ShoppingCart
                    productList={productList}
                    handleCardClick={handleCardClick}
                    handleAddToCart={handleAddToCart}
                    handleRemoveFromCart={handleRemoveFromCart}
                  />
                </Route>
              </Switch>
            </div>
          </Route>
          <Route path='/'>
            <Main />
          </Route>
        </Switch>
        <Footer />
        {activeModal === "login" && (
          <ValidationContext.Provider
            value={{
              errorDisplay,
              disableButton,
              handleLoginSubmit,
              closeActiveModal,
              setActiveModal,
              handleModalErrorDisplay,
              setDisableButton,
            }}
          >
            <LoginModal isLoading={isLoading} />
          </ValidationContext.Provider>
        )}
        {activeModal === "signup" && (
          <ValidationContext.Provider
            value={{
              errorDisplay,
              disableButton,
              handleSignUpSubmit,
              closeActiveModal,
              setActiveModal,
              handleModalErrorDisplay,
              setDisableButton,
            }}
          >
            <RegisterModal isLoading={isLoading} />
          </ValidationContext.Provider>
        )}
        {activeModal === "update" && (
          <ValidationContext.Provider
            value={{
              errorDisplay,
              disableButton,
              handleUpdateSubmit,
              closeActiveModal,
              setActiveModal,
              handleModalErrorDisplay,
              setDisableButton,
            }}
          >
            <UserUpdateProfileModal isLoading={isLoading} />
          </ValidationContext.Provider>
        )}
        {activeModal === "productpreview" && (
          <ProductViewModal
            card={activeCard}
            handleAddToCart={handleAddToCart}
            handleRemoveFromCart={handleRemoveFromCart}
            closeActiveModal={closeActiveModal}
          />
        )}
      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;
