import React, { useState, useEffect } from "react";
import "./SideBarMenu.css";

const SideBarMenu = ({ dropdownOptions }) => {
  const { openOnWideScreen, defaultOpen, titleText, dropdownItems } =
    dropdownOptions;

  const [isOpen, setIsOpen] = useState(defaultOpen);
  const toggleDropdown = () => setIsOpen(!isOpen);

  function handleItemClick(path) {
    handleResize();
  }

  function handleResize() {
    if (window.innerWidth > 800) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    if (openOnWideScreen) {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div className='dropdown'>
      <button className='dropdown__toggle' onClick={toggleDropdown}>
        {titleText}
      </button>
      {isOpen && (
        <div className='dropdown__menu'>
          {dropdownItems.map((item) => (
            <div
              key={item.value}
              className='dropdown__item'
              onClick={() => handleItemClick(item.path)}
            >
              {item.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SideBarMenu;
