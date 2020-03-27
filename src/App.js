import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navigation from './component/Navigation';
import Headline from './component/Headline';
import Landing from './component/Landing';
import PokemonList from './component/PokemonList';
import Footer from './component/Footer';
import Pokemon from './component/Pokemon';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navigation />
        </header>
        <Headline />
        <div className='App-body'>
          <Route exact path='/' component={Landing} />
          <Route exact path='/pokemon/page/:page' component={PokemonList} />
          <Route exact path='/pokemon/:id' component={Pokemon} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
