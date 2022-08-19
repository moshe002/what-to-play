import React, { useState } from 'react'
import './App.css';
import JSONFile from './games.json'

function App() {

  const games = JSONFile

  const [input, setInput] = useState('')
  const [display, setDisplay] = useState(false)

  const [game, setGame] = useState('')
  const onpress = (e) => {
    e.preventDefault()
    switch(input.toLowerCase()){
      case 'moba':
      case 'multiplayer online battle arena':
        setGame(<p>You should try playing: <b>{games[0].moba[Math.floor(Math.random() * games[0].moba.length)]}</b></p>)
        let game1 = games[0].moba[Math.floor(Math.random() * games[0].moba.length)]
        console.log('chosen game: ' + game1)
        break
      case 'fps':
      case 'first person shooter games':
      case 'first person shooter':
      case 'first person shooter game':
      case 'shooter games':
      case 'shooter game':
      case 'shooting game':
      case 'shooting games':
        setGame(<p>You should try playing: <b>{games[1].fps[Math.floor(Math.random() * games[1].fps.length)]}</b></p>)
        let game2 = games[1].fps[Math.floor(Math.random() * games[1].fps.length)]
        console.log('chosen game: ' + game2)
        break
      case 'rts':
      case 'real time strategy':
      case 'real-time strategy':
        setGame(<p>You should try playing: <b>{games[2].rts[Math.floor(Math.random() * games[2].rts.length)]}</b></p>)
        let game3 = games[2].rts[Math.floor(Math.random() * games[2].rts.length)]
        console.log('chosen game: ' + game3)
        break
      case 'mmorpg':
      case 'massively multiplayer online role-playing games':
      case 'massively multiplayer online role playing games':
      case 'massive multiplayer online role playing games':
      case 'massive multiplayer online role-playing games':
      case 'massive multiplayer online role playing game':
      case 'massive multiplayer online role-playing game':
        setGame(<p>You should try playing: <b>{games[3].mmorpg[Math.floor(Math.random() * games[3].mmorpg.length)]}</b></p>)
        let game4 = games[3].mmorpg[Math.floor(Math.random() * games[3].mmorpg.length)]
        console.log('chosen game: ' + game4)
        break
      case 'survival games':
      case 'survival': 
        setGame(<p>You should try playing: <b>{games[4].survivalgames[Math.floor(Math.random() * games[4].survivalgames.length)]}</b></p>)
        let game5 = games[4].survivalgames[Math.floor(Math.random() * games[4].survivalgames.length)]
        console.log('chosen game: ' + game5)
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
        setGame(<p>You should try playing: <b>{games[5].singleplayergames[Math.floor(Math.random() * games[5].singleplayergames.length)]}</b></p>)
        let game6 = games[5].singleplayergames[Math.floor(Math.random() * games[5].singleplayergames.length)]
        console.log('chosen game: ' + game6)
        break
      case 'battle royale':
      case 'battle royale games':
      case 'battle royale game':
        setGame(<p>You should try playing: <b>{games[6].battleroyales[Math.floor(Math.random() * games[6].battleroyales.length)]}</b></p>)
        let game7 = games[6].battleroyales[Math.floor(Math.random() * games[6].battleroyales.length)]
        console.log('chosen game: ' + game7)
        break
      case 'horror games':
      case 'horror':
      case 'horror game':
      case 'ungo-ungo':
      case 'ungo ungo': 
        setGame(<p>You should try playing: <b>{games[7].horror[Math.floor(Math.random() * games[7].horror.length)]}</b></p>)
        let game8 = games[7].horror[Math.floor(Math.random() * games[7].horror.length)]
        console.log('chosen game: ' + game8)
        break
      default: 
        setGame(<p><b>Game genre not added yet, wait for further updates.</b></p>)
        console.log('Game genre not added yet, wait for further updates.')
    }
  }

  function Result(){
    //let moba = <b>{games[0].moba[Math.floor(Math.random() * games[0].moba.length)]}</b> //(can be put inside a variable which is cool)
    return <>{game}</>
  }

  function Genre(){
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
        <h1>Not sure what video game to play?</h1>
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
        display && <Result /> 
      }
      <div className='bottom-elements'>
        <Genre />
        <p className='bottom-text'>This webapp will display what game you should try and play according on what video game genre you have entered on the input field.</p>
      </div>
    </div>
  );
}

export default App;
