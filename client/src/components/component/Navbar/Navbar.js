import React,{useState} from 'react'
import './Navbar.css';
import pokeLogo  from './pokeLogo.png'
import SearchBar  from '../SearchBar/SearchBar'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {searchPokemon, orderPokemon, filterPokemon, filterPokemonCreator} from '../../../Redux/Actions/index.js'



export  function Navbar() {
    const dispatch = useDispatch();
    const[name1, setName1] = useState('');
   

    const goHome= (e) => {
        setName1('');
        dispatch(searchPokemon(name1));
        dispatch(filterPokemon(name1))
        dispatch(orderPokemon(name1));
        dispatch(filterPokemonCreator(name1));
    }
    
    return (

        
        <div className="Navbar">
            <div className="leftSide">
             <img className="logo" src={pokeLogo}  alt="pokelogo" />  
              <div className="links">
            <Link to="/home" onClick={goHome}>Home</Link>
            <Link to="/newPoke">NewPokemon</Link>
            <Link to="/home/about">About</Link>
                </div>  
            </div>
            
            <SearchBar />

        </div>
       
       );
    }
    
   
