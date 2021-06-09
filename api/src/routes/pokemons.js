const { Router } = require('express');
const {getApiPokemon, getIdPokemon, addPokemon, getNamePokemon} = require('../handlers/pokemon.js');


/* var { Pokemon } = require('../db.js');
const axios =require('axios').default; */

const router = Router();

router.get('/pokemons', getApiPokemon);
router.get('/pokemons/:idPokemon', getIdPokemon);
router.get('/pokemons', getNamePokemon);
router.post('/pokemons', addPokemon);



/* router.get('/pokemons', function(req, res){  //este es con req.query

}); */



module.exports =router;

