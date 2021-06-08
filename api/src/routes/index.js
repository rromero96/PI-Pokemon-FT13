const { Router } = require('express');

/* var express = require('express'); */ // chequear si es necesario

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemon = require ('./pokemons.js');
const types = require ('./types.js');

const router = Router();

router.use('/', pokemon);
router.use('/', types)



module.exports = router;
