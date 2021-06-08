const { Router } = require('express');
var express = require('express');
var { Pokemon, Tipo} = require('../models/Pokemon.js');
const axios =require('axios').default;
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(express.json());

router.get('/pokemons', function (req, res){
    
});

router.get('/pokemons/:idPokemon', function(req, res){

});

router.get('/pokemons', function(req, res){  //este es con req.query

});


router.post('/pokemons', function(req, res){

});


router.get('/types ', function(req, res){

});










module.exports = router;
