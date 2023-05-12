import "./Main.css";
import logo from "../../images/logo.png";
import handsUp from "../../images/ben-hands-up.jpg";

function Main() {
  return (
    <main className='main'>
      <img className='main__title-picture' src={logo} alt='Coming Soon' />
      <div className='main__parent'>
        <p className='main__text main__text_type_upper'>
          This is an example of what YOUR website could look like.
        </p>
        <iframe
          className='main__video1'
          src='https://www.youtube.com/embed/0qCEqGUYYgY'
          title='YouTube video player'
          allow=' fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        ></iframe>
        <img className='main__body-picture' src={handsUp} alt='Main' />
      </div>
    </main>
  );
}

export default Main;
