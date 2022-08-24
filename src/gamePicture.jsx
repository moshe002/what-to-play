import React from "react";

// mmorpg
import dragonnest from './images/mmorpg/dragonnest.png'
import elderscrollsonline from './images/mmorpg/elderscrollsonline.jpg'
import flyff from './images/mmorpg/flyff.png'
import guildwars2 from './images/mmorpg/guildwars2.jpg'
import pathofexile from './images/mmorpg/pathofexile.jpg'
import runescape from './images/mmorpg/runescape.jpg'

// horror
import amnesia from './images/horror/amnesia.png'
import deadspace from './images/horror/deadspace.jpg'
import littlenightmares from './images/horror/littlenightmares.png'
import outlast from './images/horror/outlast.jpg'
import untildawn from './images/horror/untildawn.jpg'

// survival
import dontstarve from './images/survival/dontstarve.jpg'
import minecraft from './images/survival/minecraft.png'
import subnautica from './images/survival/subnautica.jpg'
import terraria from './images/survival/terraria.jpg'
import theforest from './images/survival/theforest.jpg'
import unturned from './images/survival/unturned.jpg'

// battle royale
import apexlegends from './images/battleroyale/apexlegends.jpg'
import callofdutywarzone from './images/battleroyale/callofdutywarzone.jpeg'
import fortnite from './images/battleroyale/fortnite.jpg'
import freefire from './images/battleroyale/freefire.jpg'
import pubg from './images/battleroyale/pubg.jpg'
import pubgmobile from './images/battleroyale/pubgmobile.png'
import spellbreak from './images/battleroyale/spellbreak.jpg'

// rpg
import borderlands from './images/rpg/borderlands.jpg'
import deadcells from './images/rpg/deadcells.png'
import dishonored from './images/rpg/dishonored.jpg'
import dyinglight from './images/rpg/dyinglight.jpg'
import farcry3 from './images/rpg/farcry3.jpg'
import thelastofus from './images/rpg/thelastofus.jpg'
import undertale from './images/rpg/undertale.jpg'
import witcher3 from './images/rpg/witcher3.jpg'

// moba
import LoL from './images/moba/leagueoflegends.jpg'
import dota2 from './images/moba/dota2.jpg'
import airmech from './images/moba/airmech.jpg'
import arenaofvalor from './images/moba/arenaofvalor.jpg'
import mobilelegends from './images/moba/mobilelegends.png'
import pokemonunite from './images/moba/pokemonunite.jpg'
import smite from './images/moba/smite.jpg'
import dota1 from './images/moba/dota1.jpg'

// fps
import csgo from './images/fps/csgo.jpg'
import battlefield from './images/fps/battlefield.jpg'
import callofduty from './images/fps/callofduty.jpg'
import valorant from './images/fps/valorant.jpg'
import doom from './images/fps/doom.jpg'
import overwatch from './images/fps/overwatch.jpg'
import paladins from './images/fps/paladins.jpg'
import r6 from './images/fps/rainbowsixsiege.jpeg'
import tf2 from './images/fps/teamfortress2.jpg'

// rts
import starcraftPic from './images/rts/starcraft.jpg'
import ageOfEmpires from './images/rts/age of empires.jpg'
import companyOfHeroes from './images/rts/company of heroes.jpg'
import companyOfHeroes2 from './images/rts/company of heroes 2.png'
import generalsCommandAndConquer from './images/rts/generals command and conquer.jpg'

// picture component. Renders and displays the pictures of the games
function Picture(props){
    let gamePic, chosenGame
    switch(props.input.toLowerCase()){
        case 'moba':
        case 'multiplayer online battle arena':
            switch(props.firstGame){
                case 'League of Legends':
                    chosenGame = props.firstGame
                    gamePic = LoL
                    break
                case 'Dota 2':
                    chosenGame = props.firstGame
                    gamePic = dota2
                    break
                case 'Smite':
                    chosenGame = props.firstGame
                    gamePic = smite
                    break
                case 'Mobile Legends: Bang Bang':
                    chosenGame = props.firstGame
                    gamePic = mobilelegends
                    break
                case 'Arena of Valor':
                    chosenGame = props.firstGame
                    gamePic = arenaofvalor
                    break
                case 'Pokemon Unite':
                    chosenGame = props.firstGame
                    gamePic = pokemonunite
                    break
                case 'AirMech':
                    chosenGame = props.firstGame
                    gamePic = airmech
                    break
                case 'Dota 1':
                    chosenGame = props.firstGame
                    gamePic = dota1
                    break
                default:
                    console.log('no picture to display lmao')
            }
            break
        case 'fps':
        case 'first person shooter games':
        case 'first person shooter':
        case 'first person shooter game':
        case 'shooter games':
        case 'shooter game':
        case 'shooting game':
        case 'shooting games':
            switch(props.secondGame){
                case 'Counter Strike Global Offensive':
                    chosenGame = props.secondGame
                    gamePic = csgo
                    break
                case 'Valorant':
                    chosenGame = props.secondGame
                    gamePic = valorant
                    break
                case 'Call of Duty':
                    chosenGame = props.secondGame
                    gamePic = callofduty
                    break
                case 'Battlefield':
                    chosenGame = props.secondGame
                    gamePic = battlefield
                    break
                case "Tom Clancy's Rainbow Six Siege":
                    chosenGame = props.secondGame
                    gamePic = r6
                    break
                case 'Overwatch':
                    chosenGame = props.secondGame
                    gamePic = overwatch
                    break
                case 'Paladins':
                    chosenGame = props.secondGame
                    gamePic = paladins
                    break
                case 'Team Fortress 2':
                    chosenGame = props.secondGame
                    gamePic = tf2
                    break
                case 'Doom':
                    chosenGame = props.secondGame
                    gamePic = doom
                    break
                default:
                    console.log('no picture to display lmao')
            }
            break
        case 'rts':
        case 'real time strategy':
        case 'real-time strategy':
            switch(props.thirdGame){
                case 'StarCraft':
                    chosenGame = props.thirdGame
                    gamePic = starcraftPic
                    break
                case 'Generals Command and Conquer':
                    chosenGame = props.thirdGame
                    gamePic = generalsCommandAndConquer 
                    break
                case 'Company of Heroes':
                    chosenGame = props.thirdGame
                    gamePic = companyOfHeroes
                    break
                case 'Company of Heroes 2':
                    chosenGame = props.thirdGame
                    gamePic = companyOfHeroes2 
                    break
                case 'Age of Empires':
                    chosenGame = props.thirdGame
                    gamePic = ageOfEmpires 
                    break
                default:
                    console.log('no picture to display lmao')
            }
            break
        case 'mmo':
        case 'mmorpg':
        case 'massively multiplayer online role-playing games':
        case 'massively multiplayer online role playing games':
        case 'massive multiplayer online role playing games':
        case 'massive multiplayer online role-playing games':
        case 'massive multiplayer online role playing game':
        case 'massive multiplayer online role-playing game':
            switch(props.fourthGame){
                case "Elder Scrolls Online":
                    chosenGame = props.fourthGame
                    gamePic = elderscrollsonline
                    break
                case "Flyff":
                    chosenGame = props.fourthGame
                    gamePic = flyff
                    break
                case "Path of Exile":
                    chosenGame = props.fourthGame
                    gamePic = pathofexile
                    break
                case "Runescape":
                    chosenGame = props.fourthGame
                    gamePic = runescape
                    break
                case "Guild Wars 2":
                    chosenGame = props.fourthGame
                    gamePic = guildwars2
                    break
                case "Dragon Nest":
                    chosenGame = props.fourthGame
                    gamePic = dragonnest
                    break
                default:
                    console.log('no picture to display lmao') 
            }
            break
        case 'survival games':
        case 'survival game':
        case 'survival': 
            switch(props.fifthGame){
                case "Minecraft":
                    chosenGame = props.fifthGame
                    gamePic = minecraft
                    break
                case "Terraria":
                    chosenGame = props.fifthGame
                    gamePic = terraria
                    break
                case "Unturned":
                    chosenGame = props.fifthGame
                    gamePic = unturned
                    break
                case "The Forest":
                    chosenGame = props.fifthGame
                    gamePic = theforest
                    break
                case "Don't Starve":
                    chosenGame = props.fifthGame
                    gamePic = dontstarve
                    break
                case "Subnautica":
                    chosenGame = props.fifthGame
                    gamePic = subnautica
                    break
                default:
                    console.log('no picture to display lmao')       
            }
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
            switch(props.sixthGame){
                case "The Last of Us":
                    chosenGame = props.sixthGame
                    gamePic = thelastofus
                    break
                case "The Witcher 3: Wild Hunt":
                    chosenGame = props.sixthGame
                    gamePic = witcher3
                    break
                case "Borderlands":
                    chosenGame = props.sixthGame
                    gamePic = borderlands
                    break
                case "Dishonored":
                    chosenGame = props.sixthGame
                    gamePic = dishonored
                    break
                case "Dying Light":
                    chosenGame = props.sixthGame
                    gamePic = dyinglight
                    break
                case "Undertale":
                    chosenGame = props.sixthGame
                    gamePic = undertale
                    break
                case "Dead Cells":
                    chosenGame = props.sixthGame
                    gamePic = deadcells
                    break
                case "Far Cry 3":
                    chosenGame = props.sixthGame
                    gamePic = farcry3
                    break
                default:
                    console.log('no picture to display lmao')       
            }
            break
        case 'battle royale':
        case 'battle royale games':
        case 'battle royale game':
        case 'battle royal games':
        case 'battle royal game':
        case 'battle royal': 
            switch(props.seventhGame){
                case "PUBG":
                    chosenGame = props.seventhGame
                    gamePic = pubg
                    break
                case "Apex Legends":
                    chosenGame = props.seventhGame
                    gamePic = apexlegends
                    break
                case "Fortnite":
                    chosenGame = props.seventhGame
                    gamePic = fortnite
                    break
                case "Call of Duty: Warzone":
                    chosenGame = props.seventhGame
                    gamePic = callofdutywarzone
                    break
                case "Free Fire":
                    chosenGame = props.seventhGame
                    gamePic = freefire
                    break
                case "Spellbreak":
                    chosenGame = props.seventhGame
                    gamePic = spellbreak
                    break
                case "PUBG Mobile":
                    chosenGame = props.seventhGame
                    gamePic = pubgmobile
                    break
                default:
                    console.log('no picture to display lmao')       
            }
            break
        case 'horror games':
        case 'horror':
        case 'horror game':
        case 'ungo-ungo':
        case 'ungo ungo':
            switch(props.eigthGame){
                case "Amnesia":
                    chosenGame = props.eigthGame
                    gamePic = amnesia
                    break
                case "Outlast":
                    chosenGame = props.eigthGame
                    gamePic = outlast
                    break
                case "Until Dawn":
                    chosenGame = props.eigthGame
                    gamePic = untildawn
                    break
                case "Little Nightmares":
                    chosenGame = props.eigthGame
                    gamePic = littlenightmares
                    break
                case "Dead Space":
                    chosenGame = props.eigthGame
                    gamePic = deadspace
                    break
                default:
                    console.log('no picture to display lmao')       
            }
            break
        default:
            console.log('error error error')
    }
    return(
        <>  
            <h2 style={{padding : '10px 10px'}}><b style={{color : 'lightgray'}}>{chosenGame}</b></h2>
            <img style={{ width : '300px', height : '400' }} src={gamePic} alt=''/>
        </>
    ) 
}

export default Picture;