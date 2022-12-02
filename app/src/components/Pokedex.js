import React, { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';
import CardP from './CardP';

const  Pokedex = () => {
    const [pokemones, setPokemones] = useState([])
    
    const url1 = 'https://pokeapi.co/api/v2/pokemon/?limit=1154&offset=0'

    const getpokedex = () => {
      
        axios.get(url1).then((response) => {
            console.log(response.data.results);
            setPokemones(response.data.results)
        })
    }    

    useEffect (() => {
        getpokedex();
    }, [])

    return (  
        <>
            <div className='container'>
            
                <div className='row'>
                    {pokemones.map((pokemon, i) => <CardP key={i} pokemon={pokemon.name} i={i+1}/>)}
                </div>
            </div>
        </>
    );
}
 
export default Pokedex;