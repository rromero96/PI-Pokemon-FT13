import React from 'react'
import './SearchBar.css'

function SearchBar() {
    return (
        <div className="rightSide">
        <input type="text" placeholder="Find a Pokemon" />
        <button>Search</button>
    </div>
    )
}

export default SearchBar
