import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./UserSidebarMenu.css";

function UserSidebarMenu({ history, userProfileItems }) {
  const { currentUser } = useContext(CurrentUserContext);

  const [currentSelection, setCurrentSelection] = useState(null);
  const [isOpen, setIsOpen] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  function handleTopClick() {
    if (window.innerWidth < 960) {
      toggleDropdown();
    }
    history.push("./userprofile");
  }

  function handleMenuClick(item) {
    console.log(item.text);
    history.push(item.path);
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
    <div className='user-dropdown'>
      <button className='user-dropdown__toggle' onClick={handleTopClick}>
        My Profile
      </button>
      {isOpen && (
        <div className='user-dropdown__menu'>
          {userProfileItems.map((item) => (
            <div
              key={item.text}
              className='user-dropdown__item'
              onClick={() => handleMenuClick(item)}
            >
              {item.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserSidebarMenu;

/*
Your Information
Your Orders
Login and Security
*/
