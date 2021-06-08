const { Router } = require('express');
var { Pokemon } = require('../db.js');
const axios =require('axios').default;
const router = Router();

router.get('/pokemons', function (req, res){
    
});

router.get('/pokemons/:idPokemon', function(req, res){

});

router.get('/pokemons', function(req, res){  //este es con req.query

});


router.post('/pokemons', function(req, res){

});

module.exports =router;

