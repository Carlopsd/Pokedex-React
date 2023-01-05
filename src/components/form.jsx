import React, { useState } from "react";
import Error from '../media/Error.jpg'
import Pokeball from '../media/pokeball.gif'

let pokeName;

const Form = ()=>{
    const [inputvalue, setIvalue] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        setIvalue("");
        searchPokemon();
    }

    return(
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input type="text"
                value={inputvalue}
                onChange={e => {
                    setIvalue(e.target.value);
                    pokeName=e.target.value
                }}
                placeholder="Nombre/id del pokemón" />
                <button type="submit"><i className="bi bi-search"></i> <span>Buscar</span></button>
            </form>
            <button onClick={allPokemons}>Mostrar todos</button>
        </div>
    )
} 

        // Funciones para el cambio de información 
//Funcion para buscar un pokemon especifico
function searchPokemon(){

    const informartion =document.getElementById("information");
    const allPokemonList =document.getElementById("all-pokemons");

    pokeName= pokeName.toLowerCase().replace(/[^a-zA-Z 0-9.]+/g,' ').trim()

    if (!isNaN(pokeName)){
    pokeName= Number(pokeName)
    }

    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

    fetch(url).then((res)=>{
        if (res.status != "200") {
            console.log(res);
            informartion.style.display="none"
            pokeImage(Error)
            pokeId("")
            pokeTitle("Pokemon no encontrado")
        }
        else {
            return res.json();
        }
    }).then((data)=>{
        if(data){
            informartion.style.display="inline";
            allPokemonList.style.display="none";
            console.log(data)
            pokeImage(data.sprites.front_default)
            pokeId(data.id);
            pokeTitle(data.name);
            pokeWH(data.weight,data.height);
            pokeType(data.types);
            pokeStats(data.stats);
            pokeAbilities(data.abilities);
            pokeMoves(data.moves);
            leftRightImage(data.id);
        }
    });
}
// Función para buscar todos lo pokemones diponibles
function allPokemons(){

    const informartion =document.getElementById("information");
    const allPokemonList =document.getElementById("all-pokemons");

    const url= `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`;
    informartion.style.display="none";

    fetch(url).then((res) => {
        //Si no se encuentra la lista
        if (res.status != "200") {
            console.log(res);
            informartion.style.display="none";
            pokeImage(Pokeball)
            pokeId("")
            pokeTitle("Lista no encontrada")
        }
        else {
            return res.json();
        }
    // Si encuentra el pokemos realizara las siguientes funciones
    }).then((data) => {

        pokeTitle("Pokemones disponibles")
        pokeId("")
        informartion.style.display="none";
        allPokemonList.style.display="inline";

        const pokemons= data.results;
        pokeImage(Pokeball)
        
        // Filtro de id de cada pokemon
        const url= pokemons.map((i)=>i.url)

        //Separa el id en el url completo y elimin el primer numero del string obtenido
        const id = url.map((i)=>i.replace(/[^0-9]+/g, "").slice(1))

        const pokemon = pokemons.map((i)=> i.name)
        const listPokemons=document.getElementById("list-pokemons")
        let list="<h1>Lista de Pokemons disponibles</h1>";
        pokemon.forEach((i,index)=> list += `<dt>${id[index]}: ${i}</dt>`);
        listPokemons.innerHTML= list;
    });    
}

//Función para poner la imagen 
const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
//Función para poner el id del pokemon 
const pokeId= (id) =>{
    document.getElementById("Pokemon-id").innerHTML=`#${id}`;
}
//Función para poner el nombre del Pokemon 
const pokeTitle = (title) =>{
    document.getElementById("Pokemon-title").innerHTML=`${title}`;
}
//Función para poner el peso y altura del pokemon encontrado
const pokeWH = (weight, height) => {
        document.getElementById("weight").innerHTML=`<h1>Peso:${weight/10} kg</h1>`;
        document.getElementById("height").innerHTML=`<h1>Altura: ${height/10} m</h1>`;
}
//Función para poner el tipo de pokemon encontrado
const pokeType = (type) =>{
    const typeName= type.map((i) => i.type.name);
    document.getElementById("Pokemon-type").innerHTML=`TIPO: `;

    //Acomoda cada tipo encontrado en una lista
    const listTypes = document.getElementById("list-types");
    let list=" ";
    typeName.forEach((i)=> list+= `<dt class="${i}"=>${i}</dt>`);
    listTypes.innerHTML=list;
}
//Función para poner las estadicticas del pokemon
const pokeStats =(stats) =>{
    const stat=stats.map((i) => i.stat.name);
    const value= stats.map((i)=> i.base_stat)
    
    document.getElementById("Pokemon-stats").innerHTML=`ESTADISTICAS: `;
    const listStats = document.getElementById("list-stats");
    
    //Acomoda la estadistica con su valor y lo coloca en una barra de progreso
    let list="";
    stat.forEach((stat,index)=>{
        list += `<dt>${stat}: </dt>
        <dd><progress max="230" value="${value[index]}"></progress>  ${value[index]}</dd>`
    })

    listStats.innerHTML= list;
}
//Función para poner los movimientos del pokemon
const pokeAbilities =(abilities) => {
    
    document.getElementById("Pokemon-abilities").innerHTML=`HABILIDADES:`; 
    const listAbilities = document.getElementById("list-abilities");

    const ability = abilities.map((i) => i.ability.name);
    let list=" ";
    ability.forEach((i)=> list += `<dt>${i}</dt>`);
    
    listAbilities.innerHTML= list;
}
const pokeMoves =(moves) => {
    document.getElementById("Pokemon-moves").innerHTML=`MOVIMIENTOS:`; 
    const listMoves = document.getElementById("list-moves");

    const move = moves.map((i) => i.move.name);
    let list=" ";
    move.forEach((i)=> list += `<dt>${i}</dt>`);
    
    listMoves.innerHTML= list;
}

const nextPokemon=()=> {
    const id = String (document.getElementById("Pokemon-id").innerHTML).replace(/[^0-9]+/g, "")

    if (id<10249){
        pokeName = document.getElementById("pokemon");
        if(id== 905 && id < 10001 ){
            pokeName = "10001";
        }else{
            pokeName = `${Number(id)+1}`;
        }
        searchPokemon();
    }
}
const previousPokemon=()=> {
    const id = String (document.getElementById("Pokemon-id").innerHTML).replace(/[^0-9]+/g, "")
    if(id && id >1){
        pokeName = document.getElementById("pokemon");
        if(id== 10001 && id >905 ){
            pokeName = "905";
        }else{
            pokeName = `${Number(id)-1}`;
        }
        searchPokemon();
    }
}
const leftRightImage = (id) =>{
    const right= Number(id)+1;
    const left =Number(id)-1;
    const urlRight=`https://pokeapi.co/api/v2/pokemon/${right}`;
    const urlLeft=`https://pokeapi.co/api/v2/pokemon/${left}`;
    fetch(urlRight).then((res) => {
        if (res.status != "200") {
        }
        else {
            return res.json();
        }
    }).then((data) => {
        document.getElementById("right").src=data.sprites.front_default;
    }); 
    fetch(urlLeft).then((res) => {
        if (res.status != "200") {
        }
        else {
            return res.json();
        }
    }).then((data) => {
        document.getElementById("left").src=data.sprites.front_default;
    }); 
}

export {Form, nextPokemon, previousPokemon, leftRightImage};