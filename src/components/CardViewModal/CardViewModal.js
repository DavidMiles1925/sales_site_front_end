import "./CardViewModal.css";

function CardViewModal({ closeActiveModal, children }) {
  return (
    <div className='modal modal__preview' onClick={closeActiveModal}>
      <div className='modal__container'>
        <button
          className='modal__close modal__close-item'
          onClick={closeActiveModal}
        />
        {children}
      </div>
    </div>
  );
}

export default CardViewModal;
