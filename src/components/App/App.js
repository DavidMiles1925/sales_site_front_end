// ********** Tools **********
import { Route, Switch, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

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
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import DeveloperPanel from "../DeveloperPanel/DeveloperPanel";

// ********** Styles **********
import "../../fonts/fonts.css";
import "./App.css";
import StillBuilding from "../StillBuilding/StillBuilding";

const App = () => {
  // ********** Developer Tools **********
  const [isDevMode, setIsDevMode] = useState(false);

  // ********** User Context **********
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // ********** Active Modal **********
  const [activeModal, setActiveModal] = useState("");
  const [disableButton, setDisableButton] = useState(true);
  const [errorDisplay, setErrorDisplay] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  // ********** User Selections **********
  function selectLogin() {
    setActiveModal("login");
  }

  function selectSignUp() {
    setActiveModal("signup");
  }

  // ********** Submission Handlers **********
  function handleLoginSubmit() {
    history.push("/building");
    closeModal();
  }

  function handleSignUpSubmit() {
    history.push("/building");
    closeModal();
  }

  function handleToggleLogin() {
    setIsLoggedIn(!isLoggedIn);
  }

  function handleToggleAdmin() {
    setIsAdmin(!isAdmin);
  }

  // ********** Modal Tools **********
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

  // ********** Authentication **********
  /*function getLocalToken() {
    try {
      const jwt = localStorage.getItem("token");
      return jwt;
    } catch {
      return null;
    }
  }*/

  // ********** Listeners **********
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
        <Header selectLogin={selectLogin} selectSignUp={selectSignUp} />
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
