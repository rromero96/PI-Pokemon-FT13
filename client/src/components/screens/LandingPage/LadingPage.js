import './LandingPage.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

export function LandingPage(){
    
    return (
        <div className='Landingpage'>
            <div>
                <NavLink to='/home' >
                <button className="btn">Enter the PokeWorld</button>
                </NavLink>
            </div>
        </div>
    )
}

