import React, { useState } from 'react'
import './App.css';
import JSONFile from './games.json'
import Picture from './gamePicture.jsx'

function App() {
  const games = JSONFile // variable to access the json file that holds the games
  // games are put in variables with random values
  let firstGame = games[0].moba[Math.floor(Math.random() * games[0].moba.length)], 
  secondGame = games[1].fps[Math.floor(Math.random() * games[1].fps.length)], 
  thirdGame = games[2].rts[Math.floor(Math.random() * games[2].rts.length)], 
  fourthGame = games[3].mmorpg[Math.floor(Math.random() * games[3].mmorpg.length)], 
  fifthGame = games[4].survivalgames[Math.floor(Math.random() * games[4].survivalgames.length)], 
  sixthGame = games[5].singleplayergames[Math.floor(Math.random() * games[5].singleplayergames.length)], 
  seventhGame = games[6].battleroyales[Math.floor(Math.random() * games[6].battleroyales.length)], 
  eigthGame = games[7].horror[Math.floor(Math.random() * games[7].horror.length)]

  const [input, setInput] = useState('')
  const [display, setDisplay] = useState(false)

  const [game, setGame] = useState('')
  const onpress = (e) => {
    e.preventDefault()
      switch(input.toLowerCase()){
        case 'moba':
        case 'multiplayer online battle arena':
            setGame(<p style={{visibility : 'hidden'}}>You should try playing: <b>{firstGame}</b></p>)
            console.log('chosen game: ' + firstGame)
            break
        case 'fps':
        case 'first person shooter games':
        case 'first person shooter':
        case 'first person shooter game':
        case 'shooter games':
        case 'shooter game':
        case 'shooting game':
        case 'shooting games':
            setGame(<p style={{visibility : 'hidden'}}>You should try playing: <b>{secondGame}</b></p>)
            console.log('chosen game: ' + secondGame)
            break
        case 'rts':
        case 'real time strategy':
        case 'real-time strategy':
            setGame(<p style={{visibility : 'hidden'}}>You should try playing: <b>{thirdGame}</b></p>)
            console.log('chosen game: ' + thirdGame)
            break
        case 'mmo':
        case 'mmorpg':
        case 'massively multiplayer online role-playing games':
        case 'massively multiplayer online role playing games':
        case 'massive multiplayer online role playing games':
        case 'massive multiplayer online role-playing games':
        case 'massive multiplayer online role playing game':
        case 'massive multiplayer online role-playing game':
            setGame(<p style={{visibility : 'hidden'}}>You should try playing: <b>{fourthGame}</b></p>) 
            console.log('chosen game: ' + fourthGame)
            break
        case 'survival games':
        case 'survival game':
        case 'survival': 
            setGame(<p style={{visibility : 'hidden'}}>You should try playing: <b>{fifthGame}</b></p>)
            console.log('chosen game: ' + fifthGame)
            break
        case 'singleplayer games':
        case 'singleplayer-games':
        case 'singleplayer game':
        case 'singleplayer-game':
        case 'singleplayer':
        case 'role-playing games':
        case 'role playing games':
        case 'role playing game':
        case 'role-playing game':
        case 'rpg':
            setGame(<p style={{visibility : 'hidden'}}>You should try playing: <b>{sixthGame}</b></p>)
            console.log('chosen game: ' + sixthGame)
            break
        case 'battle royale':
        case 'battle royale games':
        case 'battle royale game':
        case 'battle royal games':
        case 'battle royal game':
        case 'battle royal': 
            setGame(<p style={{visibility : 'hidden'}}>You should try playing: <b>{seventhGame}</b></p>)
            console.log('chosen game: ' + seventhGame)
            break
        case 'horror games':
        case 'horror':
        case 'horror game':
        case 'ungo-ungo':
        case 'ungo ungo':
            setGame(<p style={{visibility : 'hidden'}}>You should try playing: <b>{eigthGame}</b></p>)
            console.log('chosen game: ' + eigthGame)
        break 
        default: 
            setGame(<p style={{padding : '10px 10px'}}><b style={{color : 'lightgray'}}>Game genre not added yet, wait for further updates.</b></p>)
            console.log('Game genre not added yet, wait for further updates.')
    }
  }
  //let moba = <b>{games[0].moba[Math.floor(Math.random() * games[0].moba.length)]}</b> //(can be put inside a variable which is cool)

  function Game(){ // game component, renders the game that corresponds to the genre that you inputted
    return <>{game}</>
  }
  
  function Genre(){ // genre component, redirects you to a website that shows list of video game genres
    return <a href='https://en.wikipedia.org/wiki/List_of_video_game_genres' 
    rel="noreferrer" 
    target='_blank' 
    className='genre-text'>Click me to know all the video game genres!</a>
  }

  const getData = (e) => {
    setInput(e.target.value)
    setDisplay(false)
    console.clear()
  }

  return (
    <div className="App">
      <form onSubmit={onpress}>
        <h1 className='h1-text'>Not sure what video game to play?</h1>
        <input
        className='input'
        type='text' 
        placeholder='type here the video game genre that you like to play'
        onChange={getData} required/>
        <button type='submit' 
        className='submit-button'  
        onClick={() => setDisplay(true)}
        title='click me gamer'>Pick a game</button>
      </form>
      {
        display && <Game /> 
      }
      {
        display && <Picture 
        input={input}
        firstGame={firstGame}
        secondGame={secondGame}
        thirdGame={thirdGame}
        fourthGame={fourthGame}
        fifthGame={fifthGame}
        sixthGame={sixthGame}
        seventhGame={seventhGame}
        eigthGame={eigthGame}/>
      }
      <div className='bottom-elements'>
        <Genre />
        <p className='bottom-text'>This webapp will display what game you should try and play according on what video game genre you have entered on the input field.</p>
      </div>
    </div>
  );
}

export default App;
// npm start to run the app in the browser
// npm run deploy so that changes can be deployed in github pages
//%PUBLIC_URL%/