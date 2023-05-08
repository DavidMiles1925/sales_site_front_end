import React, { useState, useEffect, useContext } from "react";
import { FilterContext } from "../../contexts/FilterContext";
import "./SideBarMenu.css";

const SideBarMenu = ({ dropdownOptions }) => {
  const { setCurrentCategory } = useContext(FilterContext);
  const { openOnWideScreen, titleText, dropdownItems } = dropdownOptions;

  const [isOpen, setIsOpen] = useState(null);
  const toggleDropdown = () => setIsOpen(!isOpen);

  function handleTopClick() {
    if (window.innerWidth < 960) {
      toggleDropdown();
    }
    setCurrentCategory("all");
  }

  function handleCategoryClick(path) {
    const pathLower = path.toLowerCase();
    setCurrentCategory(pathLower);
    handleResize();
  }

  function handleResize() {
    if (window.innerWidth > 960) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className='dropdown'>
      <button className='dropdown__toggle' onClick={handleTopClick}>
        {titleText}
      </button>
      {isOpen && (
        <div className='dropdown__menu'>
          {dropdownItems.map((item) => (
            <div
              key={item.text}
              className='dropdown__item'
              onClick={() => handleCategoryClick(item.path)}
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
