import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './component/Navigation';
import Headline from './component/Headline';
import Landing from './component/Landing';
import PokemonList from './component/PokemonList';
import BerryList from './component/BerryList';
import Footer from './component/Footer';
import Pokemon from './component/Pokemon';
import Berry from './component/Berry';
import MachineList from './component/MachineList';
import Machine from './component/Machine';

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
          <Route exact path='/berries/page/:page' component={BerryList} />
          <Route exact path='/berries/:id' component={Berry} />
          <Route exact path='/machines/page/:page' component={MachineList} />
          <Route exact path='/machines/:id' component={Machine} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
