import { useContext } from "react";
import "./UserInformationPage.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { ValidationContext } from "../../contexts/ValidationContext";

function UserInformationPage({ setActiveModal }) {
  const { currentUser } = useContext(CurrentUserContext);
  const {
    name = "name",
    phone = "phone",
    email = "email",
    address = {},
  } = currentUser;
  const {
    street = "name",
    apt = "apt",
    city = "city",
    state = "state",
    zip = "zip",
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
      <p className='userinfo__label userinfo__label_type_header'>Contact</p>
      <div className='userinfo__item-wrapper'>
        <p className='userinfo__label'>Name</p>
        <p className='userinfo__info'>{name}</p>
      </div>
      <div className='userinfo__item-wrapper'>
        <p className='userinfo__label'>Email</p>
        <p className='userinfo__info'>{email}</p>
      </div>
      <div className='userinfo__item-wrapper'>
        <p className='userinfo__label'>Phone</p>
        <p className='userinfo__info'>{formattedPhoneNumber}</p>
      </div>
      <p className='userinfo__label userinfo__label_type_header'>Address</p>
      <div className='userinfo__item-wrapper'>
        <p className='userinfo__label'>Street</p>
        <p className='userinfo__info'>{street}</p>
        <p className='userinfo__label'>Apt/Suite</p>
        <p className='userinfo__info'>{apt}</p>
      </div>
      <div className='userinfo__item-wrapper'>
        <p className='userinfo__label'>City</p>
        <p className='userinfo__info'>{city}</p>
        <p className='userinfo__label'>State</p>
        <p className='userinfo__info'>{state}</p>
        <p className='userinfo__label userinfo__label_type_zip'>Zip</p>
        <p className='userinfo__info'>{zip}</p>
      </div>
      <div className='userinfo__item-wrapper'>
        <button
          className='userinfo__edit-button'
          type='button'
          onClick={() => {
            setActiveModal("update");
          }}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default UserInformationPage;
