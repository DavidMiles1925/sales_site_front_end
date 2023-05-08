import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";
import DividerCard from "../DividerCard/DividerCard";
import "./Header.css";
import logo from "../../images/logo.png";
import cartIcon from "../../images/cart.png";

function Header({ selectLogin, selectSignUp }) {
  const { isLoggedIn, isAdmin } = useContext(CurrentUserContext);

  return (
    <header className='header'>
      <div className='header__info'>
        <Link className='header__link header__link-main' to='/main'>
          <img className='logo' src={logo} alt='Logo'></img>
          <h1 className='header__title'>Site Name</h1>
        </Link>
        <Link className='header__link header__link-products' to='/products'>
          <p className='header__text' type='button'>
            Our Products
          </p>
        </Link>
        <Link className='header__link header__link-about' to='/about'>
          <p className='header__text' type='button'>
            About Us
          </p>
        </Link>

        {isLoggedIn ? (
          isAdmin ? (
            <Link className='header__link header__link-cart' to='/building'>
              <p className='header__text header__text-admin'>Admin Profile</p>
            </Link>
          ) : (
            <Link className='header__link header__link-cart' to='/building'>
              <p className='header__text'>Wishlist</p>
              <img className='header__cart' src={cartIcon} alt='Cart'></img>
            </Link>
          )
        ) : (
          <>
            <button
              className='header__button'
              type='button'
              onClick={selectSignUp}
            >
              Sign Up
            </button>
            <button
              className='header__button'
              type='button'
              onClick={selectLogin}
            >
              Log In
            </button>
          </>
        )}
      </div>
      <DividerCard />
    </header>
  );
}

export default Header;
