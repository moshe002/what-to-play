import React, { useState } from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState('');
  const [game, setGame] = useState([]);
  const [index, setIndex] = useState(0);
  const [details, setDetails] = useState(false);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': "f59ce02494msh9df2436cab1638ep18b077jsn3a0ca1152035",
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  
  const onSubmit = async (e) => {
    e.preventDefault();
    //console.log(input);
    setIndex(prev => prev + 1);

    try {
      await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${input}&platform=pc`, options)
      .then(response => response.json())
      .then(response => {
        //console.log(response);
        setGame(response);
        setDetails(true);
      });
    } catch(err) {
      console.log(err.message);
    }
    
  }; // gets the value on submit

  const handleChange = (e) => {
    setInput(e.target.value)
  }; // reads the input

   //console.log(game);

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <h1 className='h1-text'>Not sure what video game to play?</h1>
          <input
            className='input'
            type='text' 
            placeholder='type any video game genre (Shooter, Sci-Fi, Anime, MOBA, etc.)'
            onChange={handleChange}
            value={input} 
            required
          />
            <button type='submit' 
              className='submit-button'  
              title='click me gamer'>Pick a game
            </button>
      </form>
      <div>
        <h1 className='game-h1-result'>{game[index]?.title}</h1>
        <img className='game-img' src={game[index]?.thumbnail} alt="" />
        {
          details && <Details game={game} index={index} />
        }
      </div>
      <div className='bottom-elements'>
        <Genre />
        <p className='bottom-text'>
          <br></br>Available Game Genres are: shooter, anime, sports, sandbox, 3d, 2d, action, sci-fi and more.
          <br></br>All data and information is from FreeToGame.com.
        </p>
      </div>
    </div>
  );
};

function Genre(){ // genre component, redirects you to a website that shows list of video game genres
  return <a href='https://en.wikipedia.org/wiki/List_of_video_game_genres' 
  rel="noreferrer" 
  target='_blank' 
  className='genre-text'>Click me to know all the video game genres!</a>
};

function Details({ game, index }){
  return(
    <>
      <p className='game-details'>Platform: {game[index]?.platform}</p>
      <p className='game-details'>Release Date: {game[index]?.release_date}</p>
    </>    
  )
};

export default App;
// npm start to run the app in the browser
// npm run deploy so that changes can be deployed in github pages
