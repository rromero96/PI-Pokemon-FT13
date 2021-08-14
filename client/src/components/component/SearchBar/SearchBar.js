import React,{useState} from 'react'
import './SearchBar.css'
import {searchPokemon} from '../../../Redux/Actions/index.js'
import {useSelector, useDispatch} from 'react-redux'


export default function SearchBar () {

    const dispatch = useDispatch();
    const name = useSelector(state => state.pokemonSearched)

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

{/* <div className='cont'>
<form>
    <input className='input-icon' value={name} type="text" onChange={(e) => handleChange(e)} placeholder=" Search" />
</form>
</div> */}


/*
const handleSubmit= (e) => {
    e.preventDefault();
    if(search !==  "") {
        dispatch(searchPokemon(search))
        setSearch('')
    }
    
    let url;
       if(search === ""){
           url='/home';
       } else {
           url= `/pokeDetail/${search}`
            url= `/pokeDetail?name=${search}`
            url= `/pokeDetail/${search}` 
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
            ) */