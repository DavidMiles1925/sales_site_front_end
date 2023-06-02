import {
  STILL_BUILDING_TEXT_LOWER,
  STILL_BUILDING_TEXT_UPPER,
} from "../../utils/constants";
import "./StillBuilding.css";

function StillBuilding() {
  return (
    <div className='building'>
      <div className='building__parent'>
        <h2 className='building__title'>We're Still Building</h2>
        <p className='building__text building__text_type_upper'>
          {STILL_BUILDING_TEXT_UPPER}
        </p>
        <p className='building__text building__text_type_lower'>
          {STILL_BUILDING_TEXT_LOWER}
        </p>
      </div>
    </div>
  );
}

export default StillBuilding;
