import './LandingPage.css';
import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {getTypes, getPokemons} from '../../../Redux/Actions/index.js'
import { NavLink } from 'react-router-dom';

export function LandingPage(){
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(getTypes());
        dispatch(getPokemons());
    },[dispatch])
    
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

