import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

const PokemonList = (props) => {
    console.log(3);
    let li = null;
    const [listData, setListData] = useState(undefined);

    useEffect(() => {
        async function fetch() {
            try {
                const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${props.match.params.page * 20}&limit=20`);
                const { results } = data;
                setListData(results);
            }
            catch (e) {
                console.log(e);
            }
        }
        fetch();
    }, [props.match.params.page]);

    li = listData && listData.map((result) => {
        let { name } = result;
        let { url } = result;
        return <li key={url}>{name}</li>
    })

    return (
        <div className='pokemonlist'>
            <div className='list'>
                {li}
            </div>
        </div>
    )
}

export default PokemonList;