import { useContext, useEffect } from "react";
import { ValidationContext } from "../../contexts/ValidationContext";
import { useFormAndValidation } from "../../utils/useFormAndValidation";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/ModalWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function UserUpdateProfileModal({ isLoading }) {
  const { currentUser } = useContext(CurrentUserContext);
  const { setDisableButton, handleUpdateSubmit, closeActiveModal } =
    useContext(ValidationContext);
  const { values, errors, isValid, handleChange, resetForm, setValues } =
    useFormAndValidation();

  const { name, phone, address } = currentUser;
  const { street, apt, city, state, zip } = address;

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
    handleUpdateSubmit(values);
  }

  useEffect(() => {
    setValues({ name, phone, address, street, apt, city, state, zip });
  }, [name, phone, address, street, apt, city, state, zip, setValues]);

  useEffect(() => {
    setDisableButton(!isValid);
  }, [values, isValid, setDisableButton]);
  return (
    <ModalWithForm
      title='Update Profile'
      name='update'
      buttonText={isLoading ? "Saving..." : "Save"}
      handleSubmit={handleSubmit}
      alternateButton={{
        value: true,
        text: "or Cancel",
        path: "",
      }}
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
        maxLength={11}
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
        Street <span className='modal__optional'>(optional)</span>
      </label>
      <input
        className='modal__input modal__input_type_text'
        type='text'
        name='street'
        id='street'
        value={values.street || ""}
        onChange={handleChange}
      />
      <span className='modal__error' id='street-error'>
        {errors.street}
      </span>

      <label className='modal__label'>
        Apt/Suite <span className='modal__optional'>(optional)</span>
      </label>
      <input
        className='modal__input modal__input_type_text'
        type='text'
        name='apt'
        id='apt'
        value={values.apt || ""}
        onChange={handleChange}
      />
      <span className='modal__error' id='apt-error'>
        {errors.apt}
      </span>

      <label className='modal__label'>
        City <span className='modal__optional'>(optional)</span>
      </label>
      <input
        className='modal__input modal__input_type_text'
        type='text'
        name='city'
        id='city'
        value={values.city || ""}
        onChange={handleChange}
      />
      <span className='modal__error' id='city-error'>
        {errors.city}
      </span>

      <label className='modal__label'>
        State <span className='modal__optional'>(optional)</span>
      </label>
      <input
        className='modal__input modal__input_type_text'
        type='text'
        name='state'
        id='state'
        value={values.state || ""}
        onChange={handleChange}
      />
      <span className='modal__error' id='state-error'>
        {errors.state}
      </span>

      <label className='modal__label'>
        Zip Code <span className='modal__optional'>(optional)</span>
      </label>
      <input
        className='modal__input modal__input_type_text'
        type='text'
        name='zip'
        id='zip'
        value={values.zip || ""}
        onChange={handleChange}
      />
      <span className='modal__error' id='zip-error'>
        {errors.zip}
      </span>
    </ModalWithForm>
  );
}

export default UserUpdateProfileModal;
