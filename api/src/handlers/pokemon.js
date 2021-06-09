const {Pokemon} = require('../db.js');
const { v4: uuidv4 } = require('uuid');


async function getApiPokemon (req, res, next) {


}

async function getIdPokemon (req, res, next) { // hacer params y query

}

async function addPokemon (req, res, next) {
    const id = uuidv4();
    const pokemon = {...req.body, id};
    if(!pokemon) {
        return res.send({
            error: 500,
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