import "./Main.css";
import comingSoon from "../../images/coming-soon.png";

function Main() {
  return (
    <main className='main'>
      <img className='main__title-picture' src={comingSoon} alt='Coming Soon' />
    </main>
  );
}

export default Main;
