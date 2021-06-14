import React from 'react';
import './App.css';
/* import { useSelector } from 'react-redux'; */
import {Route} from 'react-router-dom';
import { LandingPage } from './components/LandingPage/LadingPage';
import { Home } from './components/Home/Home.js';
import { PokemonDetail } from './components/PokemonDetail/PokemonDetail';
import { NewPokemon } from './components/NewPokemon/NewPokemon';
import { Navbar } from './components/Navbar/Navbar';



function App() {
  return (
    <React.Fragment>
      <Route path='/home' component={Navbar} />
      <Route path='/newPoke' component={Navbar} />
      <Route path='/pokeDetail/:id' component={Navbar} />
      <Route exact path='/' component={LandingPage} />
      <Route path='/home' component={Home} />
      <Route path='/pokeDetail/:id' component={PokemonDetail} />
      <Route path='/newPoke' component={NewPokemon} />
    </React.Fragment>
  );
}



export default App;
