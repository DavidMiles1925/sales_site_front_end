import { useContext } from "react";
import "./UserInformationPage.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function UserInformationPage() {
  console.log("log");
  const { currentUser } = useContext(CurrentUserContext);
  const { name = "name", phone = "name", address = {} } = currentUser;
  const {
    street = "name",
    apt = "name",
    city = "name",
    state = "name",
    zip = "name",
  } = address;

  function formatPhoneNumber(phoneNumberString) {
    var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      var intlCode = match[1] ? "+1 " : "";
      return [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join("");
    }
    return null;
  }

  const formattedPhoneNumber = formatPhoneNumber(phone);

  return (
    <div className='userinfo'>
      <div className='userinfo__item-wrapper'>
        <p className='userinfo__label'>Name</p>
        <p className='userinfo__info'>{name}</p>
      </div>
      <p className='userinfo__info'>{formattedPhoneNumber}</p>
      <p className='userinfo__info'>{street}</p>
      <p className='userinfo__info'>{apt}</p>
      <p className='userinfo__info'>{city}</p>
      <p className='userinfo__info'>{state}</p>
      <p className='userinfo__info'>{zip}</p>
    </div>
  );
}

export default UserInformationPage;
