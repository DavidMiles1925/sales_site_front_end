import "./StillBuilding.css";

function StillBuilding() {
  return (
    <div className='building'>
      <div className='building__parent'>
        <h2 className='building__title'>We're Still Building</h2>
        <p className='building__text building__text_type_upper'>
          The feature you selected is not part of this demo.
        </p>
        <p className='building__text building__text_type_lower'>
          It can easily be implemented on YOUR website!
        </p>
      </div>
    </div>
  );
}

export default StillBuilding;
