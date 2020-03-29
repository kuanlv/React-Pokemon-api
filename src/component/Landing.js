import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className='landing-body'>
            <div className='landing-h1'>
                <h1>Welcome to Palette Town</h1>
            </div>
            <div className='landing-intro'>
                <div className='landing-intro-pokemons'>
                    <div className='landing-intro-h2'>
                        <Link to='/pokemon/page/0'><h2>Pokemons</h2></Link>
                    </div>
                    <div className='landing-intro-p'>
                        Pokémon, also known as Pocket Monsters in Japan,
                        is a Japanese media franchise managed by the Pokémon
                        Company, a company founded and with shares divided
                        between Nintendo, Game Freak, and Creatures. The
                        franchise copyright and Japanese trademark is shared
                        by all three companies, but Nintendo is the sole
                        owner of the trademark in other countries.
                    </div>
                </div>

                <div className='landing-intro-berries'>
                    <div className='landing-intro-h2'>
                        <Link to='/berries/page/0'><h2>Berries</h2></Link>
                    </div>
                    <div className='landing-intro-p'>
                        Berries have a variety of uses. These berries can all
                        be used and crushed in order to make other items, PokéBlocks
                        Poffin that are used to boost your Pokémon's Contest statistics.
                        In addition to that, some berries have in-battle effects
                        such as healing Pokémon and some even reduce the Effort
                        Values your Pokémon have gained. Berries can be given to
                        your Pokémon to be held and can be reproduced by growing
                        them in loamy soil around the regions or in the Berry Pots
                        item. All berries however are one-use so use them wisely.
                    </div>
                </div>

                <div className='landing-intro-machines'>
                    <div className='landing-intro-h2'>
                        <Link to='machines/page/0'><h2>Machines</h2></Link>
                    </div>
                    <div className='landing-intro-p'>
                        Pokémon GO Fast Technical Machine (Fast TM) and Charged
                        Technical Machine (Charged TM) are special items used to
                        teach your Pokémon a new move from its currently available
                        movepool. Fast TM is available for Trainers above level 15,
                        and Charged TM is available after reaching Trainer level 25.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;