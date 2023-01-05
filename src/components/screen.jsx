import React from "react";
import gif from '../media/pokeball.gif'

let linkImage =gif;

const screen = ()=>{
    return(
        <div className="screen">
            <div className="presentation">
                <img src={linkImage} alt="Imagen no disponible por el momento." id="pokeImg" width="150px" height="auto" />
                <div className="Pokemon-name">
                    <h1 id="Pokemon-id">#</h1>
                    <h1 id="Pokemon-title">Busca Pokemón por nombre o número</h1>
                </div>
            </div> 
            <div id="information">
                <div className="W-H">
                    <div id="weight"></div>
                    <div id="height"></div>
                </div>
                <div className="types">
                    <h1 id="Pokemon-type">Types</h1>
                    <dl id="list-types">
                    </dl>
                </div>
                <div className="stats">
                    <h1 id="Pokemon-stats">Stats</h1>
                    <dl id="list-stats">
                    </dl>
                </div>
                <div className="Pokemon-Abilities">
                    <h1 id="Pokemon-abilities">Abilities</h1>
                    <dl id="list-abilities">
                    </dl>
                </div>
                <div className="Pokemon-moves">
                    <h1 id="Pokemon-moves">Moves</h1>
                    <dl id="list-moves">
                    </dl>
                </div>
            </div>
            <div id="all-pokemons">
                <dl id="list-pokemons">
                </dl>
            </div>
        </div>
    )
}

export default screen;