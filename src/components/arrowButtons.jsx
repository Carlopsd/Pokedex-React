import React from "react";
import { nextPokemon, previousPokemon } from "./form";

const directionsButtons = () =>{

    return(
        <div className="direction-buttons">
        <div></div>
        <div onClick={previousPokemon}><i class="bi bi-caret-up-fill"></i></div>
        <div></div>
        <div onClick={previousPokemon}><i id="left" className="bi bi-caret-left-fill"></i></div>
        <div id="center"></div>
        <div onClick={nextPokemon}><i className="bi bi-caret-right-fill"></i></div>
        <div></div>
        <div onClick={nextPokemon}><i className="bi bi-caret-down-fill"></i></div>
        <div></div>
        </div>
    )
}

export default directionsButtons;