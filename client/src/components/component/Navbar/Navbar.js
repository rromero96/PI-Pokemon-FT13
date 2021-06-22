import React from 'react'
import pokeLogo  from './pokeLogo.png'
import {Link} from 'react-router-dom'



export function Navbar() {
    
    return (
        
        <div className="Navbar">
            <div className="leftSide">
             <img className="logo" src={pokeLogo}  alt="pokelogo" />  
              <div className="links">
            <Link to="/home">Home</Link>
            <Link to="/newPoke">NewPokemon</Link>
            <Link to="/home/filter">Filter</Link>
            <Link to="/search">Search</Link>
                </div>  
                

               
            </div>
            

        </div>
       
       );
    }
    