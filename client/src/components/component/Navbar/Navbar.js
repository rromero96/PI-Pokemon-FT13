import React from 'react'
import './Navbar.css';
import pokeLogo  from './pokeLogo.png'
import SearchBar from '../SearchBar/SearchBar'



export  function Navbar() {
    
    return (
        
        <div className="Navbar">
            <div className="leftSide">
             <img className="logo" src={pokeLogo}  alt="pokelogo" />  
              <div className="links">
            <a href="/home">Home</a>
            <a href="/newPoke">NewPokemon</a>
                </div>  
            </div>
            
            <SearchBar />

        </div>
       
    );
}


