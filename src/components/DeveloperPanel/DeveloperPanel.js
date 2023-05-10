import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import "./DeveloperPanel.css";

function DeveloperPanel({ handleToggleLogin, handleToggleAdmin }) {
  const { currentUser, isLoggedIn, isAdmin } = useContext(CurrentUserContext);

  return (
    <div className='dev-panel'>
      <div className='dev-panel__login-container'>
        <p className='dev-panel__message'>Developer Panel:</p>
        <div className='dev-panel__status-container'>
          <button
            className='dev-panel__button dev-panel__button_login'
            onClick={handleToggleLogin}
          >
            Log In/Out
          </button>
          <p className='dev-panel__text dev-panel__text_login-status'>
            Status: {isLoggedIn ? "True" : "False"}
          </p>
        </div>
        {isLoggedIn && (
          <>
            <p>
              Username: {currentUser.name} | Email: {currentUser.email}
            </p>
            <div className='dev-panel__status-container'>
              <button
                className='dev-panel__button dev-panel__button_admin'
                onClick={handleToggleAdmin}
              >
                Admin On/Off
              </button>
              <p className='dev-panel__text dev-panel__text_admin-status'>
                Status: {isAdmin ? "True" : "False"}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/*

*/

export default DeveloperPanel;
