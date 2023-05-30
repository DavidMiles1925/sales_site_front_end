import { useContext, useEffect } from "react";
import { ValidationContext } from "../../contexts/ValidationContext";
import { useFormAndValidation } from "../../utils/useFormAndValidation";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/ModalWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function UserUpdateProfileModal({ isLoading }) {
  const { currentUser } = useContext(CurrentUserContext);
  const { setDisableButton, handleUpdateSubmit } =
    useContext(ValidationContext);
  const { values, errors, isValid, handleChange, resetForm, setValues } =
    useFormAndValidation();

  function formatPhoneNumber(phoneNumberString) {
    const cleaned = ("" + phoneNumberString).replace(/\D/g, "");
    return cleaned;
  }

  function handlePhoneChange(e) {
    handleChange(e);
    const { name, value } = e.target;
    setValues({ ...values, [name]: formatPhoneNumber(value) });
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateSubmit();
  }

  useEffect(() => {
    setValues(currentUser);
  }, [currentUser, setValues]);

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  useEffect(() => {
    setDisableButton(!isValid);
  }, [values, isValid, setDisableButton]);
  return (
    <ModalWithForm
      title='Sign Up'
      name='signup'
      buttonText={isLoading ? "Saving" : "Sign Up"}
      handleSubmit={handleSubmit}
      alternateButton={{ value: true, text: "or Log In", path: "login" }}
    >
      <label className='modal__label'>
        Name <span className='modal__optional'>(optional)</span>
      </label>
      <input
        className='modal__input modal__input_type_text'
        type='text'
        name='name'
        id='name'
        maxLength='30'
        value={values.name || ""}
        onChange={handleChange}
      />
      <span className='modal__error name__error' id='name-error'>
        {errors.name}
      </span>

      <label className='modal__label'>
        Phone Number <span className='modal__optional'>(optional)</span>
      </label>
      <input
        className='modal__input modal__input_type_text'
        type='tel'
        name='phone'
        id='phone'
        minLength={10}
        maxLength={15}
        value={values.phone || ""}
        onChange={handlePhoneChange}
      />
      <span className='modal__format modal__optional' id='phone-format'>
        Special characters will be automatically removed.
      </span>
      <span className='modal__error' id='phone-error'>
        {errors.phone}
      </span>

      <label className='modal__label'>
        Phone Number <span className='modal__optional'>(optional)</span>
      </label>
      <input
        className='modal__input modal__input_type_text'
        type='text'
        name='street'
        id='street'
        minLength={10}
        maxLength={15}
        value={values.address.street || ""}
        onChange={handleChange}
      />
      <span className='modal__error' id='street-error'>
        {errors.address.street}
      </span>

      <label className='modal__label'>
        Phone Number <span className='modal__optional'>(optional)</span>
      </label>
      <input
        className='modal__input modal__input_type_text'
        type='text'
        name='apt'
        id='apt'
        minLength={10}
        maxLength={15}
        value={values.address.apt || ""}
        onChange={handleChange}
      />
      <span className='modal__error' id='apt-error'>
        {errors.address.apt}
      </span>

      <label className='modal__label'>
        Phone Number <span className='modal__optional'>(optional)</span>
      </label>
      <input
        className='modal__input modal__input_type_text'
        type='text'
        name='city'
        id='city'
        minLength={10}
        maxLength={15}
        value={values.address.city || ""}
        onChange={handleChange}
      />
      <span className='modal__error' id='city-error'>
        {errors.address.city}
      </span>

      <label className='modal__label'>
        Phone Number <span className='modal__optional'>(optional)</span>
      </label>
      <input
        className='modal__input modal__input_type_text'
        type='text'
        name='state'
        id='state'
        minLength={10}
        maxLength={15}
        value={values.address.state || ""}
        onChange={handleChange}
      />
      <span className='modal__error' id='state-error'>
        {errors.address.state}
      </span>

      <label className='modal__label'>
        Phone Number <span className='modal__optional'>(optional)</span>
      </label>
      <input
        className='modal__input modal__input_type_text'
        type='text'
        name='zip'
        id='zip'
        minLength={10}
        maxLength={15}
        value={values.address.zip || ""}
        onChange={handleChange}
      />
      <span className='modal__error' id='zip-error'>
        {errors.address.zip}
      </span>
    </ModalWithForm>
  );
}

export default UserUpdateProfileModal;
