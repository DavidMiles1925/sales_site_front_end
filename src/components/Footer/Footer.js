import ContactInfo from "../ContactInfo/ContactInfo";
import "./Footer.css";

function Footer({ handleLoginSubmit, handleToggleAdmin }) {
  return (
    <footer className='footer'>
      <div className='footer__divider' />
      <ContactInfo />
    </footer>
  );
}

export default Footer;
