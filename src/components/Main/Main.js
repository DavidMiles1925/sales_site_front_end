import JokeGenerator from "../JokeGenerator/JokeGenerator";
import "./Main.css";
import handsUpImage from "../../images/ben-hands-up.jpg";

function Main({ generateJoke, chuckJoke, isLoading }) {
  return (
    <main className='main'>
      <div className='main__parent'>
        <JokeGenerator
          // generateJoke={generateJoke}
          chuckJoke={chuckJoke}
          isLoading={isLoading}
        />
        <h2 className='main__new-video-header'>Our Newest Video</h2>
        <iframe
          className='main__video1'
          src='https://www.youtube.com/embed/0qCEqGUYYgY'
          title='YouTube video player'
          allow=' fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        ></iframe>
        <h2 className='main__new-video-header'>What's New?</h2>
        <p className='main__paragraph'>
          We are loving the weather, and out at the Heritage Hound Dog's
          fundraiser!
        </p>
        <img className='main__body-picture' src={handsUpImage} alt='Main' />
      </div>
    </main>
  );
}

export default Main;
