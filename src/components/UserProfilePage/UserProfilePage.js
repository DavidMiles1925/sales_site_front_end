import { Route, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import UserSidebarMenu from "../UserSidebarMenu/UserSidebarMenu";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { userSidebar } from "../../utils/constants";
import "./UserProfilePage.css";

function UserProfilePage({ history }) {
  const { currentUser } = useContext(CurrentUserContext);

  const userProfileItems = userSidebar;
  return (
    <div className='user-profile'>
      <div className='user-profile__sidebar-container'>
        <UserSidebarMenu
          history={history}
          userProfileItems={userProfileItems}
        />
      </div>
    </div>
  );
}

export default UserProfilePage;
