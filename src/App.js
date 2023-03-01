import React, { useState } from 'react'
import './App.css';

function App() {

  const [input, setInput] = useState('');
  const [game, setGame] = useState([]);
  //const [index, setIndex] = useState(0);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f59ce02494msh9df2436cab1638ep18b077jsn3a0ca1152035',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    //setIndex(prev => prev + 1);

    await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${input}&platform=pc`, options)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setGame(response);
      })
      .catch(err => console.error(err));
  }; // gets the value on submit

  const handleChange = (e) => {
    setInput(e.target.value)
  }; // reads the input

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <h1 className='h1-text'>Not sure what video game to play?</h1>
          <input
            className='input'
            type='text' 
            placeholder='type here the video game genre (Shooter, Sci-Fi, Anime, MOBA)'
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
        <ul>
        {
          game.map((game, i) => {
            return(
              <li key={i}>{game[1].id}</li>
            )
          })
        }
        </ul>
      </div>
      <div className='bottom-elements'>
        <Genre />
        <p className='bottom-text'>This webapp will display what game you should try and play according on what video game genre you have entered on the input field.</p>
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

export default App;
// npm start to run the app in the browser
// npm run deploy so that changes can be deployed in github pages
