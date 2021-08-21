import './Home.css'
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getPokemons, setPage} from '../../../Redux/Actions/index.js'
import Pokemon from '../../component/Pokemon/Pokemon'
import { Link } from 'react-router-dom';
import {Filter} from '../../component/Filter/Filter'





export function Home() {
    const dispatch = useDispatch();
    const pokemonList = useSelector(state => state.pokemonList)
    const name = useSelector(state => state.pokemonSearched)
    const page = useSelector(state => state.actualPage);
    const type = useSelector(state => state.pokemonFiltered)
    const orderBy =useSelector(state => state.orderBy)
    const orderType =useSelector(state => state.orderType)
    const filter = useSelector(state => state.pokemonCreator)
    let totalPages = useSelector((state) => state.totalPages);
    totalPages = Math.ceil(totalPages);

  
    
    useEffect(() =>{
        dispatch(getPokemons(name, type, orderBy, orderType, filter, page));
    },[dispatch, name, type, orderBy, orderType, filter, page])


      

    const prevPage = (e) => {
        e.preventDefault();
        dispatch(setPage(page - 1));
    };
    const nextPage = (e) => {
        e.preventDefault();
        dispatch(setPage(page + 1));
      }
      
 
     if(pokemonList.length <1 && pokemonList.length > 0  && pokemonList.length !==1) {
    return (
        <div className='loading'>
            <h1>LOADING</h1>
            <img src='client/src/images/Spinner-1s-204px.gif' alt='pokemon img'/>
        </div>
        )
    } 
    if(!pokemonList.length){
        return (
            <div className='notFound'>
            <h1>Pokemon NOT FOUND!!</h1>
            <img src='https://media.giphy.com/media/yuI7fL5cR1YeA/giphy.gif' alt='pokemon img'/>
        </div>
        )
    }
    else { 
        return  (
            <div className="home">     
            <Filter className="filter"/>
            <div className="row-center-home"> 
            {
            pokemonList.map((pokemon, index)=> (
                <Link to={`/pokeDetail/${pokemon.id}`} style={{ textDecoration: 'none', color: 'black' }} key={index}>
            <Pokemon pokemon={pokemon}></Pokemon>
                </Link> 
        )) 
        }
        </div>
        <div className="paginate">
            <button  disabled={page === 1 ? true : false} onClick={prevPage}>{'Previous'}</button>
            <button  disabled={page === totalPages ? true : false} onClick={nextPage}>{'Next'}</button>

        </div>
        </div>
        )

    }            
}


export default Home


