import React,{useState} from 'react'
import {connect} from 'react-redux'
import './SearchBar.css'
import {searchPokemon} from '../../../Redux/Actions/index.js'
import {Link} from 'react-router-dom';


function SearchBar({searchPokemon, pokemonSearched}) {

    const[search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    

const handleSubmit= (e) => {
    e.preventDefault();
    if(search !==  "") {
        searchPokemon(search)
        setSearch('')
    }
}

    return (
        <div>
            <form>
                <div className="rightSide">
                    <input type="text" value={search} placeholder="Find a Pokemon" onChange={handleChange}/>
                    <Link to={`/pokeDetail/${pokemonSearched.id}`}>
                    <button onClick={handleSubmit}>Search</button>
                    </Link>
                </div>
            </form>
        {/* {} */}

        </div>
            )
}


function mapStateToProps(state) {
    return {
        pokemonSearched: state.pokemonSearched
    }
}

function mapDispatchToProps(dispatch) {
    return {
        searchPokemon: (name) => dispatch(searchPokemon(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);