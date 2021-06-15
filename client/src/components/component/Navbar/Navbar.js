import React from 'react'
import './Navbar.css';
import pokeLogo  from './pokeLogo.png'
import SearchBar from '../SearchBar/SearchBar'
import {Link} from 'react-router-dom'



export  function Navbar() {
    
    return (
        
        <div className="Navbar">
            <div className="leftSide">
             <img className="logo" src={pokeLogo}  alt="pokelogo" />  
              <div className="links">
            <Link to="/home">Home</Link>
            <Link to="/newPoke">NewPokemon</Link>
                </div>  
            </div>
            
            <SearchBar />

        </div>
       
       );
    }
    
   
