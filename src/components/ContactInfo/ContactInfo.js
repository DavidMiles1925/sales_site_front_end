import { contactInfo } from "../../utils/constants";
import "./ContactInfo.css";

function ContactInfo() {
  return (
    <div className='contact'>
      <h3 className='contact__title'>Contact</h3>
      <div className='contact__wrapper'>
        <div className='contact__header-wrapper'>
          <p className='contact__header contact__header_type_address'>
            Address:
          </p>
          <p className='contact__header'>Phone:</p>
          <p className='contact__header'>Email:</p>
        </div>
        <div className='contact__info-wrapper'>
          <div className='contact__info-item'>{contactInfo.ADDRESS}</div>
          <div className='contact__info-item contact__info-item_type_address'>{`${contactInfo.CITY}, ${contactInfo.STATE} ${contactInfo.ZIP}`}</div>
          <div className='contact__info-item'>{contactInfo.PHONE_MAIN}</div>
          <div className='contact__info-item'>{contactInfo.EMAIL}</div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
