import './LandingPage.css';
import React from 'react';
import { Link } from 'react-router-dom';

export function LandingPage(){
    return (
        <div className='Landingpage'>
            <div>
                <Link to='/home' >
                <button className="btn">Enter the PokeWorld</button>
                </Link>
            </div>
        </div>
    )
}

