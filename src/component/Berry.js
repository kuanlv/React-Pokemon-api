import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Berry = (props) => {
    let [berry, setBerry] = useState(undefined);
    let [error, setError] = useState(false);
    const id = props.match.params.id;

    useEffect(() => {
        async function getBerry() {
            try {
                const { data } = await axios.get(`https://pokeapi.co/api/v2/berry/${id}`);
                console.log(data);
                setBerry(data);
            } catch (e) {
                setError(true);
                console.log(e);
            }
        };
        getBerry();
    }, [id])

    let ul = null;
    // if (Number.parseInt(id) > 64)
    if (error)
        return (
            <div className='error'>
                <h1>404: Page Not Found!</h1>
            </div>
        )

    if (berry) {
        ul = <ul>
            <li>Name: {berry.name}</li>
            <li>Firmness: {berry.firmness.name}</li>
            <li>Max Harvest: {berry.max_harvest}</li>
            <li>Size: {berry.size}</li>
            <li>Smoothness: {berry.smoothness}</li>
        </ul>
    }
    return (
        <div className="pokemon">
            <div className='pokemon-info'>
                {ul}
            </div>
        </div>
    )
}

export default Berry;