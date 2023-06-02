import {
  ABOUT_US_OUR_PLEDGE,
  ABOUT_US_WHAT_WE_DO,
  ABOUT_US_WHERE_WE_CAME_FROM,
} from "../../utils/constants";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className='about-us'>
      <div className='about-us__sidebar'>
        <h2 className='about-us__title'>About Us</h2>
      </div>
      <div className='about-us__wrapper'>
        <div className='about-us__section-container'>
          <h3 className='about-us__section-title'>What we do:</h3>
          <p className='about-us__section-text'>{ABOUT_US_WHAT_WE_DO}</p>
        </div>
        <div className='about-us__section-container'>
          <h3 className='about-us__section-title'>Where we came from:</h3>
          <p className='about-us__section-text'>
            {ABOUT_US_WHERE_WE_CAME_FROM}
          </p>
        </div>
        <div className='about-us__section-container'>
          <h3 className='about-us__section-title'>Our pledge to you:</h3>
          <p className='about-us__section-text'>{ABOUT_US_OUR_PLEDGE}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
