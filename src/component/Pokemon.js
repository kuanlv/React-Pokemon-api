import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = (props) => {
    let [poke, setPokemon] = useState({});
    let id = props.match.params.id;
    let p = null;

    useEffect(() => {
        async function getPokemon() {
            try {
                const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
                const { abilities } = data;
                setPokemon(abilities);
                console.log(abilities);
                console.log(poke);
                p = <p>{data.name}</p>
            } catch (e) {
                console.log(e);
            }
        }
        getPokemon();
    }, [])

    return (
        <div className='pokemon'>
            <ul>
                {/* <li>Name: {poke}</li> */}
                {/* <li>Order: {poke.order}</li>
                <li>Height: {poke.height}</li>
                <li>Weight: {poke.weight}</li> */}
            </ul>
        </div>
    )
}

export default Pokemon;