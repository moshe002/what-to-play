import React, { useState } from 'react'
import './App.css';
import JSONFile from './games.json'
import Picture from './gamePicture.jsx'

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
        let firstGame = games[0].moba[Math.floor(Math.random() * games[0].moba.length)]
        setGame(<p style={{padding : '10px 10px'}}>You should try playing: <b style={{color : 'lightgray'}}>{firstGame}</b></p>)
        let game1 = firstGame.replaceAll(' ', '').toLowerCase()
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
        let secondGame = games[1].fps[Math.floor(Math.random() * games[1].fps.length)]
        setGame(<p style={{padding : '10px 10px'}}>You should try playing: <b style={{ color : 'lightgray'}}>{secondGame}</b></p>)
        let game2 = secondGame.replaceAll(' ', '').toLowerCase()
        console.log('chosen game: ' + game2)
        break
      case 'rts':
      case 'real time strategy':
      case 'real-time strategy':
        let thirdGame = games[2].rts[Math.floor(Math.random() * games[2].rts.length)]
        setGame(<p style={{padding : '10px 10px'}}>You should try playing: <b style={{ color : 'lightgray'}}>{thirdGame}</b></p>)
        let game3 = thirdGame.replaceAll(' ', '').toLowerCase()
        console.log('chosen game: ' + game3)
        //if(game3 === gamePics[Math.floor(Math.random() * gamePics.length)]) { setPic(gamePics[Math.floor(Math.random() * gamePics.length)]) } else { setPic(<p>no picture available</p>) }
        return game3
      case 'mmorpg':
      case 'massively multiplayer online role-playing games':
      case 'massively multiplayer online role playing games':
      case 'massive multiplayer online role playing games':
      case 'massive multiplayer online role-playing games':
      case 'massive multiplayer online role playing game':
      case 'massive multiplayer online role-playing game':
        let fourthGame = games[3].mmorpg[Math.floor(Math.random() * games[3].mmorpg.length)]
        setGame(<p style={{padding : '10px 10px'}}>You should try playing: <b style={{ color : 'lightgray'}}>{fourthGame}</b></p>)
        let game4 = fourthGame.replaceAll(' ', '').toLowerCase()
        console.log('chosen game: ' + game4)
        break
      case 'survival games':
      case 'survival': 
        let fifthGame = games[4].survivalgames[Math.floor(Math.random() * games[4].survivalgames.length)]
        setGame(<p style={{padding : '10px 10px'}}>You should try playing: <b style={{ color : 'lightgray'}}>{fifthGame}</b></p>)
        let game5 = fifthGame.replaceAll(' ', '').toLowerCase()
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
        let sixthGame = games[5].singleplayergames[Math.floor(Math.random() * games[5].singleplayergames.length)]
        setGame(<p style={{padding : '10px 10px'}}>You should try playing: <b style={{ color : 'lightgray'}}>{sixthGame}</b></p>)
        let game6 = sixthGame.replaceAll(' ', '').toLowerCase()
        console.log('chosen game: ' + game6)
        break
      case 'battle royale':
      case 'battle royale games':
      case 'battle royale game':
      case 'battle royal games':
      case 'battle royal game':
      case 'battle royal': 
        let seventhGame = games[6].battleroyales[Math.floor(Math.random() * games[6].battleroyales.length)]
        setGame(<p style={{padding : '10px 10px'}}>You should try playing: <b style={{ color : 'lightgray'}}>{seventhGame}</b></p>)
        let game7 = seventhGame.replaceAll(' ', '').toLowerCase()
        console.log('chosen game: ' + game7)
        break
      case 'horror games':
      case 'horror':
      case 'horror game':
      case 'ungo-ungo':
      case 'ungo ungo':
        let eigthGame = games[7].horror[Math.floor(Math.random() * games[7].horror.length)]
        setGame(<p style={{padding : '10px 10px'}}>You should try playing: <b style={{ color : 'lightgray'}}>{eigthGame}</b></p>)
        let game8 = eigthGame.replaceAll(' ', '').toLowerCase()
        console.log('chosen game: ' + game8)
        break 
      default: 
        setGame(<p style={{padding : '10px 10px'}}><b>Game genre not added yet, wait for further updates.</b></p>)
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
        display && <Result /> 
      }
      {
        display && <Picture input={onpress}/>
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