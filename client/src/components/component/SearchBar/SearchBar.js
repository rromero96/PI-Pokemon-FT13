import React,{useState} from 'react'
import {connect} from 'react-redux'
import './SearchBar.css'
import {searchPokemon} from '../../../Redux/Actions/index.js'


function SearchBar({searchPokemon}) {
    const[search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    const handleSubmit=(e) => {
        e.preventDefault();
        searchPokemon(search)
        setSearch('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="rightSide">
                <input type="text" value={search} placeholder="Find a Pokemon" onChange={handleChange}/>
                <button>Search</button>
                </div>
            </form>
          {}

        </div>
            )
}


function mapStateToProps(state) {
    return {
        pokemonDetail: state.pokemonDetail
    }
}

function mapDispatchToProps(dispatch) {
    return {
        searchPokemon: (name) => dispatch(searchPokemon(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);