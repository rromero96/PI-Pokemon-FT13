const {Pokemon} = require('../db.js');
const { v4: uuidv4 } = require('uuid');
const axios = require('axios');


async function getApiPokemon (req, res, next) {
        const pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon');
        return res.json(pokemon.data);
}

async function getIdPokemon (req, res, next) { // hacer params y query

}

async function addPokemon (req, res, next) {
    const id = uuidv4();
    const pokemon = {...req.body, id};
    if(!req.body.name) {
        return res.send({      
            message: 'tenes que llenar los datos',
        });
    }
    try {
        const createdPokemon = await Pokemon.create(pokemon);
        return res.send(createdPokemon);
    } catch(error) {
        next(error);
    }

}



module.exports = {
    getApiPokemon,
    getIdPokemon,
    addPokemon
}