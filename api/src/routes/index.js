const { Router } = require('express');
const router = Router();

/* var express = require('express'); */ // chequear si es necesario

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemon = require ('./pokemons');
const types = require ('./types');


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', pokemon);
router.use('/types', types)



module.exports = router;
