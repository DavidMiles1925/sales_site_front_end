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
            We're not sure yet, but if you have any ideas feel free to let us
            know!
          </p>
        </div>
        <div className='about-us__section-container'>
          <h3 className='about-us__section-title'>Where we came from:</h3>
          <p className='about-us__section-text'>
            On day we thought, "Hmm, it would be cool to sell something online,
            but what could we sell? Oh well, I'll just build a website and then
            figure it out."
          </p>
        </div>
        <div className='about-us__section-container'>
          <h3 className='about-us__section-title'>Our pledge to you:</h3>
          <p className='about-us__section-text'>
            Someday we will figure out what the heck we're going to do and go do
            it.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
