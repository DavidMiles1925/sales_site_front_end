import { Route, Switch, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import Main from "../Main/Main";
import AboutUs from "../AboutUs/AboutUs";
import ProductsPage from "../ProductsPage/ProductsPage";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import "../../fonts/fonts.css";
import "./App.css";
import DeveloperPanel from "../DeveloperPanel/DeveloperPanel";
import { ValidationContext } from "../../contexts/ValidationContext";

const App = () => {
  const [isDevMode, setIsDevMode] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [disableButton, setDisableButton] = useState(true);
  const [errorDisplay, setErrorDisplay] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  function handleLoginSubmit() {
    closeModal();
  }

  function handleSignUpSubmit() {
    closeModal();
  }

  function handleToggleLogin() {
    setIsLoggedIn(!isLoggedIn);
  }

  function handleToggleAdmin() {
    setIsAdmin(!isAdmin);
  }

  function handleLoginClick() {
    setActiveModal("login");
  }

  function handleSignUpClick() {
    setActiveModal("signup");
  }

  function closeModal() {
    setActiveModal("");
  }

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

  /*function getLocalToken() {
    try {
      const jwt = localStorage.getItem("token");
      return jwt;
    } catch {
      return null;
    }
  }*/

  useEffect(() => {
    setCurrentUser({ email: "test@test.com", name: "TestUser" });
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
        value={{ currentUser, isLoggedIn, isAdmin, isDevMode }}
      >
        <Header
          handleLoginClick={handleLoginClick}
          handleSignUpClick={handleSignUpClick}
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
          <Route path='/cart'>
            <ShoppingCart />
          </Route>
          <Route path='/main'>
            <Main />
          </Route>
          <Route path='/products'>
            <ProductsPage />
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
      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;
