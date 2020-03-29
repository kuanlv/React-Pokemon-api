import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = (props) => {
    let [poke, setPokemon] = useState(undefined);
    let id = props.match.params.id;
    let img = null;
    let flag = null;

    useEffect(() => {
        async function getPokemon() {
            try {
                const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
                setPokemon(data);
            } catch (e) {
                console.log('here');
                console.log(e);
            }
        }
        getPokemon();
    }, [id])

    if (isNaN(id) || Number.parseInt(id) > 964)
        return <h1 className='error'>404: Page Not Found</h1>

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

    if (flag) {
        return (
            <h1 className='error'>404: Page Not Found!</h1>
        )
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