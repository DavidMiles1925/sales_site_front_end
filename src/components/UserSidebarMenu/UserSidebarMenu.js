import { useEffect, useState } from "react";
import "./UserSidebarMenu.css";

function UserSidebarMenu({ history, userProfileItems }) {
  const [isOpen, setIsOpen] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  function handleTopClick() {
    if (window.innerWidth < 960) {
      toggleDropdown();
    }
    history.push("/userprofile/userinfo");
  }

  function handleMenuClick(item) {
    history.push(item.path);
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
