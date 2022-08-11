import React, { useState } from 'react'
import './App.css';
import JSONFile from './games.json'

function App() {

  const games = JSONFile

  const [input, setInput] = useState('')
  const [display, setDisplay] = useState(false)

  const onpress = (e) => {
    e.preventDefault()
    switch(input){
      case 'moba':
        console.log(games[0].moba)
        break
      case 'fps':
        console.log(games[1].fps)
        break
      case 'rts':
        console.log(games[2].rts)
        break
      case 'mmorpg':
        console.log(games[3].mmorpg)
        break
      case 'survival games':
        console.log(games[4].survivalgames)
        break
      case 'singleplayer games':
        console.log(games[5].singleplayergames)
        break
      default: 
        console.log('Game genre not added yet, wait for further updates.')
    }
  }

  function Result(){
    switch(input){
      case 'moba':
      case 'MOBA':
      case 'Moba':
        return <p>You should try playing: <b>{games[0].moba[Math.floor(Math.random() * games[0].moba.length)]}</b></p>
      case 'fps':
      case 'FPS':
      case 'Fps':
      case 'shooting game':
        return <p>You should try playing: <b>{games[1].fps[Math.floor(Math.random() * games[1].fps.length)]}</b></p>
      case 'rts':
      case 'RTS':
      case 'Rts':
        return <p>You should try playing: <b>{games[2].rts[Math.floor(Math.random() * games[2].rts.length)]}</b></p>
      case 'mmorpg':
      case 'MMORPG':
      case 'Mmorpg':
        return <p>You should try playing: <b>{games[3].mmorpg[Math.floor(Math.random() * games[3].mmorpg.length)]}</b></p>
      case 'survival games':
      case 'survival': 
      case 'Survival':
        return <p>You should try playing: <b>{games[4].survivalgames[Math.floor(Math.random() * games[4].survivalgames.length)]}</b></p>
      case 'singleplayer games':
      case 'singleplayer':
      case 'Singleplayer':
      case 'RPG':
      case 'rpg':
      case 'Role-Playing Games':
      case 'role-playing games':
      case 'Role Playing Games':
      case 'role playing games':
      case 'Role playing games':
        return <p>You should try playing: <b>{games[5].singleplayergames[Math.floor(Math.random() * games[5].singleplayergames.length)]}</b></p>
      default: 
        if(input === ''){
          return <p></p>
        }
        else {
          return <p><b>Wrong spelling or game genre not added yet, wait for further updates.</b></p>
        }
    }
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
        placeholder='type here the video game genre you want to choose'
        onChange={getData} required/>
        <button type='submit' className='submit-button' onClick={() => setDisplay(true)} title='Press me :)'>Submit</button>
      </form>
      {
        display? <Result /> : null 
      }
    </div>
  );
}

export default App;
