import React,{useState} from 'react'
import './SearchBar.css'
import {searchPokemon} from '../../../Redux/Actions/index.js'
import { useDispatch} from 'react-redux'


export default function SearchBar () {

    const dispatch = useDispatch();
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
    


    return (
        <div>
        <form>
            <div className="rightSide">
                <input type="text" value={search} placeholder="Find a Pokemon" onChange={handleChange}/>
                <button onClick={handleSubmit}>Search</button>
            </div>
        </form>
    </div>
            )
}

