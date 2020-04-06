import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = (props) => {
    let [poke, setPokemon] = useState(undefined);
    let [error, setError] = useState(false);
    let id = props.match.params.id;
    let img = null;

    useEffect(() => {
        async function getPokemon() {
            try {
                const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
                setPokemon(data);
            } catch (e) {
                setError(true);
                console.log(e);
            }
        }
        getPokemon();
    }, [id])

    if (error)
        return (
            <div className='error'>
                <h1>404: Page Not Found!</h1>
            </div>
        )

    let ul = null;
    if (poke) {
        let src = poke.sprites.front_default;
        img = <img alt={poke.name} src={src} />;
        ul = <ul>
            {img}
            <li>Name: {poke.name}</li>
            <li>Height: {poke.height}</li>
            <li>Weight: {poke.weight}</li>
        </ul>
    }

    return (
        <div className='pokemon'>
            <div className='pokemon-info'>
                {ul}
            </div>
        </div>
    )
}

export default Pokemon;