import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MachineList = (props) => {
    const [listData, setListData] = useState(undefined);
    const [nextUrl, setNext] = useState(0);
    const [previousUrl, setPrevious] = useState(0);
    const [error, setError] = useState(false);

    let nextPage = null;
    let previousPage = null;
    let li = null;
    let page = props.match.params.page;

    useEffect(() => {
        async function fetch() {
            try {
                const { data } = await axios.get(`https://pokeapi.co/api/v2/machine/?offset=${page * 20}&limit=20`);
                const { results, next, previous } = data;
                setListData(results);
                setNext(next);
                setPrevious(previous);
            }
            catch (e) {
                setError(true);
                console.log(e);
            }
        }
        fetch();
    }, [page]);

    if (error || page > 72 || page < 0)
        return (
            <div className='error'>
                <h1>404: Page Not Found!</h1>
            </div>
        )


    let id = 0;
    li = listData && listData.map((result) => {
        id++;
        return <Link key={id} to={`/machines/${page * 20 + id}`}>
            <li key={id}>Machine Number {page * 20 + id}</li>
        </Link>
    });

    if (previousUrl != null) {
        let count = Number.parseInt(page) - 1;
        previousPage = <Link to={`/machines/page/${count}`}><button className='page-nav'>Previous Page</button></Link>
    }
    if (nextUrl != null) {
        let count = Number.parseInt(page) + 1;
        nextPage = <Link to={`/machines/page/${count}`}><button className='page-nav'>Next Page</button></Link>
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

export default MachineList;