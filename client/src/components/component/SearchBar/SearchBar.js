
import React,{useState} from 'react'
import './SearchBar.css'
import {searchPokemon} from '../../../Redux/Actions/index.js'
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';


export default function SearchBar () {

    const dispatch = useDispatch();
    const pokemonSearched = useSelector(state => state.pokemonSearched)

    const[search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    

    const handleSubmit= (e) => {
    e.preventDefault();
    if(search !==  "") {
        dispatch(searchPokemon(search))
        setSearch('')
    }
}
    let url;
    if(search === ""){
        url='/home';
    } else {
        url= `/pokeDetail/${search}`;
    }

    return (
        <div>
            <form>
                <div className="rightSide">
                    <input type="text" value={search} placeholder="Find a Pokemon" onChange={handleChange}/>
                    <Link to={url}>
                    <button>Search</button>
                    </Link>
                </div>
            </form>

        </div>
            )
}

