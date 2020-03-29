import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BerryList = (props) => {
    const [listData, setListData] = useState(undefined);
    const [nextUrl, setNext] = useState(0);
    const [previousUrl, setPrevious] = useState(0);

    let nextPage = null;
    let previousPage = null;
    let li = null;
    let page = props.match.params.page;

    useEffect(() => {
        async function fetch() {
            try {
                const { data } = await axios.get(`https://pokeapi.co/api/v2/berry/?offset=${page * 20}&limit=20`);
                const { results, next, previous } = data;
                setListData(results);
                setNext(next);
                setPrevious(previous);
            }
            catch (e) {
                console.log(e);
            }
        }
        fetch();
    }, [page]);

    let id = 0;
    li = listData && listData.map((result) => {
        let { name } = result;
        let { url } = result;
        id++;
        return <Link key={id} to={`/berries/${page*20 + id}`}>
            <li key={url}>{name}</li>
        </Link>
    });

    if (previousUrl != null) {
        let count = Number.parseInt(page) - 1;
        previousPage = <Link to={`/berries/page/${count}`}><button className='page-nav'>Previous Page</button></Link>
    }
    if (nextUrl != null) {
        let count = Number.parseInt(page) + 1;
        nextPage = <Link to={`/berries/page/${count}`}><button className='page-nav'>Next Page</button></Link>
    }

    return (
        <div className='pokemonlist'>
            <div className='list'>
                {li}
            </div>
            <div className='page-button'>
                {previousPage}
                {nextPage}
            </div>
        </div>
    )
}

export default BerryList;