import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";
import DividerCard from "../DividerCard/DividerCard";
import "./Header.css";
import logo from "../../images/logo.png";
import cartIcon from "../../images/cart.png";
import UserDropdownMenu from "../UserDropdownMenu/UserDropdownMenu";
import { userDropdown } from "../../utils/constants";

function Header({ selectLogin, selectSignUp, history }) {
  const { isLoggedIn, isAdmin } = useContext(CurrentUserContext);

  const dropdownItems = userDropdown;

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
            <UserDropdownMenu dropdownItems={dropdownItems} history={history} />
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
