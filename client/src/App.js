import React from 'react';
import './App.css';
/* import { useSelector } from 'react-redux'; */
import {Route} from 'react-router-dom';
import { LandingPage } from './components/LandingPage/LadingPage';
import { Home } from './components/Home/Home';
import { PokemonDetail } from './components/PokemonDetail/PokemonDetail';
import { NewPokemon } from './components/NewPokemon/NewPokemon';



function App() {
  return (
    <React.Fragment>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/pokeDetail/:id' component={PokemonDetail} />
      <Route exact path='/newPoke' component={NewPokemon} />
    </React.Fragment>
  );
}



export default App;
