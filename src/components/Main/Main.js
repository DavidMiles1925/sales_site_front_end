import "./Main.css";
import comingSoon from "../../images/demo-site.png";

function Main() {
  return (
    <main className='main'>
      <img className='main__title-picture' src={comingSoon} alt='Coming Soon' />
      <div className='main__parent'>
        <p className='main__text main__text_type_upper'>
          This is an example of what YOUR website could look like.
        </p>
        <p className='main__text main__text_type_lower'>
          Say the word, and you can have one just like it!
        </p>
      </div>
    </main>
  );
}

export default Main;
