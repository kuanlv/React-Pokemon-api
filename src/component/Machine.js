import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Machine = (props) => {
    let [machine, setMachine] = useState(undefined);
    let [error, setError] = useState(false);
    const id = props.match.params.id;

    useEffect(() => {
        async function fetch() {
            try {
                const { data } = await axios.get(`https://pokeapi.co/api/v2/machine/${id}`);
                setMachine(data);
            } catch (e) {
                setError(true);
            }
        }
        fetch();
    }, [id]);

    if (error)
        return (
            <div className='error'>
                <h1>404: Page Not Found!</h1>
            </div>
        )

    let ul = null;
    if (machine) {
        ul = <ul>
            <li>Name: {machine.item.name}</li>
            <li>Move: {machine.move.name}</li>
            <li>Version Group: {machine.version_group.name}</li>
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

export default Machine;