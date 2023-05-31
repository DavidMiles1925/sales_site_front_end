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
          <p className='about-us__section-text'>
            We check out the latest games and bring you tips, tricks, and ideas
            for those players who maybe unable to use the controller the same
            way as other players.
          </p>
        </div>
        <div className='about-us__section-container'>
          <h3 className='about-us__section-title'>Where we came from:</h3>
          <p className='about-us__section-text'>
            We are from a Olathe, a suburb of Kansas City. Ben was born with
            cerebral palsy, but that has never stopped him tackling a video
            game! We love to play together, and we decided we would share our
            fun times with the world.
          </p>
        </div>
        <div className='about-us__section-container'>
          <h3 className='about-us__section-title'>Our pledge to you:</h3>
          <p className='about-us__section-text'>
            Our goal is to bring you high quality entertainment, while providing
            you with the best adaptive tips for multi-abled players.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
