import React, { useState } from "react";

import starcraftPic from './images/rts/starcraft.jpg'
import ageOfEmpires from './images/rts/age of empires.jpg'
import companyOfHeroes from './images/rts/company of heroes.jpg'
import companyOfHeroes2 from './images/rts/company of heroes 2.png'
import generalsCommandAndConquer from './images/rts/generals command and conquer.jpg'

function Picture(props){
    return(
        <img style={{ marginTop : '2rem' }} src={props.input} alt='test'/>
    )
}

export default Picture;