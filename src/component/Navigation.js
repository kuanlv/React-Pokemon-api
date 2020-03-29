import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/pokemon-logo-3.png';

const Navigation = () => {
    return (
        <div className='wrapper'>
            <div className='logo'>
                <img alt='Pokemon' src={logo} />
            </div>

            <div className='nav-bar-container'>
                <nav className='nav-bar'>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/pokemon/page/0'>Pokemons</Link></li>
                        <li><Link to='/berries/page/0'>Berries</Link></li>
                        <li><Link to='/machines/page/0'>Machines</Link></li>
                    </ul>
                </nav>
                
            </div>
        </div>
    )
}

export default Navigation;