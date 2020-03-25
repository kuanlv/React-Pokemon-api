import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navigation from './component/Navigation';
import Headline from './component/Headline';
import PokemonList from './component/PokemonList';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navigation />
        </header>
        <Headline />
        <div className='App-body'>
          <h1>Welcome to Palette Town</h1>
        </div>
      </div>
    <Route path='/pokemons/page/0' exact component={PokemonList} />
    </Router>
  );
}

export default App;
