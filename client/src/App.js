import React from 'react';
import './App.css';
/* import { useSelector } from 'react-redux'; */
import { Route } from 'react-router-dom';
import { LandingPage } from './components/screens/LandingPage/LadingPage';
import { Home } from './components/screens/Home/Home.js';
import { PokemonDetail } from './components/screens/PokemonDetail/PokemonDetail';
import { NewPokemon } from './components/screens/NewPokemon/NewPokemon';
import { Navbar }  from './components/component/Navbar/Navbar';
import { Filter } from './components/screens/Filter/Filter';
import { Searched } from './components/screens/Searched/Searched';
import { SearchNav } from './components/component/Navbar/SearchNav'



function App() {
  return (
    <React.Fragment>
      <Route path='/home' component={Navbar} />
      <Route path='/newPoke' component={Navbar} />
      <Route path='/search' component={SearchNav} />
      <Route path='/home/filter' component={Filter} />
      <Route path='/search' component={Searched} />
      <Route path='/pokeDetail/:id' component={Navbar} />
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/home' component={Home} />
      <Route path='/pokeDetail/:id' component={PokemonDetail} />
      <Route path='/newPoke' component={NewPokemon} />
    </React.Fragment>
  );
}



export default App;
