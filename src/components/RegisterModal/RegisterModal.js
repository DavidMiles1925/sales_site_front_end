import { useContext, useEffect } from "react";
import { ValidationContext } from "../../contexts/ValidationContext";
import { useFormAndValidation } from "../../utils/useFormAndValidation";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/ModalWithForm";

function RegisterModal({ isLoading }) {
  const { setDisableButton, handleSignUpSubmit } =
    useContext(ValidationContext);
  const { values, errors, isValid, handleChange, resetForm, setValues } =
    useFormAndValidation();

  function formatPhoneNumber(phoneNumberString) {
    const cleaned = ("" + phoneNumberString).replace(/\D/g, "");
    /*
    const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      const intlCode = match[1] ? "+1 " : "";
      return [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join("");
    }
    */
    return cleaned;
  }

  function handlePhoneChange(e) {
    handleChange(e);
    const { name, value } = e.target;
    setValues({ ...values, [name]: formatPhoneNumber(value) });
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSignUpSubmit(values);
  }

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
      <label className='modal__label'>Email*</label>
      <input
        className='modal__input modal__input_type_text'
        type='email'
        name='email'
        id='email'
        placeholder='Email'
        required
        minLength='1'
        maxLength='30'
        value={values.email || ""}
        onChange={handleChange}
      />
      <span className='modal__error email__error' id='email-error'>
        {errors.email}
      </span>

      <label className='modal__label'>Password*</label>
      <input
        className='modal__input modal__input_type_text'
        type='password'
        name='password'
        id='password'
        placeholder='Password'
        required
        minLength='8'
        maxLength='30'
        value={values.password || ""}
        onChange={handleChange}
      />
      <span className='modal__error password__error' id='password-error'>
        {errors.password}
      </span>

      <label className='modal__label'>
        Name <span className='modal__optional'>(optional)</span>
      </label>
      <input
        className='modal__input modal__input_type_text'
        type='text'
        name='name'
        id='name'
        placeholder='Name'
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
        placeholder='Phone'
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
    </ModalWithForm>
  );
}

export default RegisterModal;
