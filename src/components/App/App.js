// ********** Tools **********
import { Route, Switch, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { errorMessageHandler } from "../../contexts/ValidationContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

// ********** Styles **********
import "../../fonts/fonts.css";
import "./App.css";

// ********** API **********
import { getProducts } from "../../utils/api";
import {
  signup,
  signin,
  checkToken,
  updateUser,
  addToCart,
  removeFromCart,
  updateCartTotal,
} from "../../utils/auth";

// ********** Contexts **********
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { ValidationContext } from "../../contexts/ValidationContext";

// ********** Main Site Components **********
import Header from "../Header/Header";
import ProductsPage from "../ProductsPage/ProductsPage";
import Main from "../Main/Main";
import AboutUs from "../AboutUs/AboutUs";
import Footer from "../Footer/Footer";

// ********** User Profile Components **********
import UserProfilePage from "../UserProfilePage/UserProfilePage";
import { userDropdown } from "../../utils/constants";
import UserInformationPage from "../UserInformationPage/UserInformationPage";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

// ********** Developer Components **********
import StillBuildingPage from "../StillBuilding/StillBuilding";
import DeveloperPanel from "../DeveloperPanel/DeveloperPanel";

// ********** Modals **********
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import UserUpdateProfileModal from "../UserUpdateProfileModal/UserUpdateProfileModal";
import ProductViewModal from "../ProductViewModal/ProductViewModal";

const App = () => {
  // ********** Developer Tools **********
  const [isDevMode, setIsDevMode] = useState(false);

  // ********** Server **********
  const [productList, setProductList] = useState([]);
  const [chuckJoke, setChuckJoke] = useState("");

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

  function convertToFloat(string) {
    var floatValue = +string;
    return floatValue;
  }

  /*
  function generateJoke() {
    setIsLoading(true);
    getJoke()
      .then((res) => {
        setChuckJoke(JSON.parse(JSON.stringify(res.joke)));
      })
      .catch((err) => {
        console.log(err);
        setChuckJoke("Could not reach server.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }*/

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
    setCurrentUser();
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

  function handleAddToCart(_id, price) {
    if (isLoggedIn) {
      const token = localStorage.getItem("token");
      const newTotal = String(
        convertToFloat(currentUser.cartTotal) + convertToFloat(price)
      );
      addToCart(_id, newTotal, token)
        .then((user) => {
          setCurrentUser(user);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setActiveModal("login");
    }
  }

  function handleRemoveFromCart(_id, price) {
    const token = localStorage.getItem("token");
    const newTotal = String(
      convertToFloat(currentUser.cartTotal) - convertToFloat(price)
    );

    removeFromCart(_id, newTotal, token)
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function adjustCartTotalForPriceChanges(cartItems) {
    let currentTotal = 0;

    for (let item = 0; item < cartItems.length; item++) {
      currentTotal = currentTotal + convertToFloat(cartItems[item].price);
    }

    currentTotal = String(currentTotal);

    if (currentTotal !== currentUser.cartTotal) {
      const token = localStorage.getItem("token");
      updateCartTotal(String(currentTotal), token)
        .then((user) => {
          setCurrentUser(user);
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
    setActiveMenuSelection(userDropdown[0]);
  }, []);

  useEffect(() => {
    checkAccess();
  }, []);

  useEffect(() => {
    setCurrentUser({ cart: [], cartTotal: "none" });
  }, []);

  useEffect(() => {
    getProducts()
      .then((products) => {
        setProductList(products);
      })
      .catch((err) => {
        console.log("error occured");
      });
  }, []);

  /*
  useEffect(() => {
    generateJoke();
  }, []);
  */

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
            <StillBuildingPage />
          </Route>
          <Route path='/main'>
            <Main
              //generateJoke={generateJoke}
              chuckJoke={chuckJoke}
              isLoading={isLoading}
            />
          </Route>
          <Route path='/products'>
            <ProductsPage
              productList={productList}
              handleCardClick={handleCardClick}
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          </Route>

          <ProtectedRoute path='/userprofile'>
            <div className='app__profile-page-container'>
              <UserProfilePage history={history} />
              <Switch>
                <ProtectedRoute exact path='/userprofile/building'>
                  <StillBuildingPage />
                </ProtectedRoute>
                <ProtectedRoute exact path='/userprofile/userinfo'>
                  <UserInformationPage setActiveModal={setActiveModal} />
                </ProtectedRoute>
                <ProtectedRoute exact path='/userprofile/usercart'>
                  <ShoppingCart
                    productList={productList}
                    handleCardClick={handleCardClick}
                    handleAddToCart={handleAddToCart}
                    handleRemoveFromCart={handleRemoveFromCart}
                    adjustCartTotalForPriceChanges={
                      adjustCartTotalForPriceChanges
                    }
                    history={history}
                  />
                </ProtectedRoute>
                <Route path='/'>
                  <Main
                    //generateJoke={generateJoke}
                    chuckJoke={chuckJoke}
                    isLoading={isLoading}
                  />
                </Route>
              </Switch>
            </div>
          </ProtectedRoute>
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
