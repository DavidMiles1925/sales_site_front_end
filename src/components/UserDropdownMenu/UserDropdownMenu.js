import React, { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./UserDropdownMenu.css";
import { database } from "../../utils/mockServer";

const UserDropdownMenu = ({ dropdownItems, history }) => {
  const {
    currentUser,
    handleLogOut,
    activeMenuSelection,
    setActiveMenuSelection,
    alternateAvatar,
  } = useContext(CurrentUserContext);

  const { id, text, path, image } = activeMenuSelection;

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  function handleTopClick() {
    toggleDropdown();
  }

  function handleLinkClick(item) {
    if (item.path === "logout") {
      handleLogOut();
    }
    handleResize();
    history.push(item.path);

    setActiveMenuSelection(item);
  }

  function handleResize() {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    console.log(currentUser);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className='dropdown'>
      <div className='dropdown__title-container'>
        <button className='dropdown__toggle' onClick={handleTopClick} key={id}>
          {text}
        </button>
        {activeMenuSelection.image !== "user" ? (
          <img
            className='dropdown__image'
            src={image}
            alt='activeMenuSelection'
          />
        ) : (
          <p className='dropdown__default-avatar'>{alternateAvatar}</p>
        )}
      </div>
      {isOpen && (
        <div className='dropdown__menu'>
          {dropdownItems.map((item) => {
            return (
              <div
                key={item.path}
                className='dropdown__item'
                onClick={() => handleLinkClick(item)}
              >
                {item.text}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default UserDropdownMenu;
