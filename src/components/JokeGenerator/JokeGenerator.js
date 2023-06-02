import "./JokeGenerator.css";

function JokeGenerator({ generateJoke, chuckJoke, isLoading }) {
  /*
  function handleJokeClick() {
    console.log(isLoading);
    generateJoke();
  }
  */

  return (
    <div className='main__api-container'>
      <h2 className='main__api-header'>Chuck Norris Joke Generator</h2>
      <div className='main__api-joke-container'>
        <p className='main__api-joke'>
          {isLoading ? "Loading..." : "chuckJoke"}
        </p>
        <button
          className='main__api-generate-button'
          type='button'
          // onClick={handleJokeClick}
        >
          Generate Joke
        </button>
      </div>
      <div className='main__api-footer'>
        <p className='main__api-credit'>Courtesy of API-Ninja</p>
      </div>
    </div>
  );
}

export default JokeGenerator;
