import "./Main.css";
import logo from "../../images/logo.png";
import handsUp from "../../images/ben-hands-up.jpg";

function Main() {
  return (
    <main className='main'>
      <div className='main__parent'>
        <h2 className='main__new-video-header'>Our Newest Video</h2>
        <iframe
          className='main__video1'
          src='https://www.youtube.com/embed/0qCEqGUYYgY'
          title='YouTube video player'
          allow=' fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        ></iframe>
        <h2 className='main__new-video-header'>What's New</h2>
        <p className='main__paragraph'>
          We are loving the weather, and out at the Heritage Hounddog's
          fundraiser!
        </p>
        <img className='main__body-picture' src={handsUp} alt='Main' />
      </div>
    </main>
  );
}

export default Main;
