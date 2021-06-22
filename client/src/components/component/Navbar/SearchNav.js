import React from 'react'
import './Navbar.css';
import pokeLogo  from './pokeLogo.png'
import SearchBar  from '../SearchBar/SearchBar'
import {Link} from 'react-router-dom'



export  function SearchNav() {
    
    return (
        
        <div className="Navbar">
            <div className="leftSide">
             <img className="logo" src={pokeLogo}  alt="pokelogo" />  
              <div className="links">
            <Link to="/home">Home</Link>
            <Link to="/newPoke">NewPokemon</Link>
            <Link to="/home/filter">Filter</Link>
                </div>  
            </div>
            
            <SearchBar />

        </div>
       
       );
    }
    
   
