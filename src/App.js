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
    switch(input){
      case 'moba':
      case 'MOBA':
      case 'Moba':
      case 'Multiplayer Online Battle Arena':
        setGame('You should try playing: ' + games[0].moba[Math.floor(Math.random() * games[0].moba.length)])
        let game1 = games[0].moba[Math.floor(Math.random() * games[0].moba.length)]
        console.log('chosen game: ' + game1)
        break
      case 'fps':
      case 'FPS':
      case 'Fps':
      case 'shooting game':
        setGame('You should try playing: ' + games[1].fps[Math.floor(Math.random() * games[1].fps.length)])
        let game2 = games[1].fps[Math.floor(Math.random() * games[1].fps.length)]
        console.log('chosen game: ' + game2)
        break
      case 'rts':
      case 'RTS':
      case 'Rts':
        setGame('You should try playing: ' + games[2].rts[Math.floor(Math.random() * games[2].rts.length)])
        let game3 = games[2].rts[Math.floor(Math.random() * games[2].rts.length)]
        console.log('chosen game: ' + game3)
        break
      case 'mmorpg':
      case 'MMORPG':
      case 'Mmorpg':
        setGame('You should try playing: ' + games[3].mmorpg[Math.floor(Math.random() * games[3].mmorpg.length)])
        let game4 = games[3].mmorpg[Math.floor(Math.random() * games[3].mmorpg.length)]
        console.log('chosen game: ' + game4)
        break
      case 'survival games':
      case 'survival': 
      case 'Survival':
        setGame('You should try playing: ' + games[4].survivalgames[Math.floor(Math.random() * games[4].survivalgames.length)])
        let game5 = games[4].survivalgames[Math.floor(Math.random() * games[4].survivalgames.length)]
        console.log('chosen game: ' + game5)
        break
      case 'singleplayer games':
      case 'singleplayer':
      case 'Singleplayer':
      case 'RPG':
      case 'Role-Playing Games':
      case 'role-playing games':
      case 'Role Playing Games':
      case 'role playing games':
      case 'Role playing games':
      case 'rpg':
        setGame('You should try playing: ' + games[5].singleplayergames[Math.floor(Math.random() * games[5].singleplayergames.length)])
        let game6 = games[5].singleplayergames[Math.floor(Math.random() * games[5].singleplayergames.length)]
        console.log('chosen game: ' + game6)
        break
      default: 
        setGame('Game genre not added yet, wait for further updates.')
        console.log('Game genre not added yet, wait for further updates.')
    }
  }

  function Result(){
    //let moba = <b>{games[0].moba[Math.floor(Math.random() * games[0].moba.length)]}</b> //(can be put inside a variable which is cool)
    return <p><b>{game}</b></p>
  }

  function Genre(){
    return <a href='https://en.wikipedia.org/wiki/List_of_video_game_genres' rel="noreferrer" target='_blank' className='genre-text'>Click me to know all the video game genres!</a>
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
        <button type='submit' className='submit-button' onClick={() => setDisplay(true)} title='Press me :)'>Submit</button>
      </form>
      {
        display? <Result /> : null 
      }
      <div className='bottom-elements'>
        <Genre />
        <p className='bottom-text'>This webapp will display what game you should try and play according on what video game genre you have entered on the input field.</p>
      </div>
    </div>
  );
}

export default App;
