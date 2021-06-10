const {Pokemon, Tipo} = require('../db.js');
const { v4: uuidv4 } = require('uuid');
const axios = require('axios');


async function getApiPokemon (req, res) {
    let array = [];
    let type;
    var lower = req.query.name.toLowerCase();
    if(req.query.name) {
        try {
            let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${lower}`); //${req.query.name}
            if(pokemon.data.types.length === 1) {
                type = pokemon.data.types[0].type.name;
            } else {
                type = pokemon.data.types[0].type.name + ", " + pokemon.data.types[1].type.name;
            }
            console.log(type);
            var obj = {
                name: pokemon.data.name,
                id: pokemon.data.id,
                image: pokemon.data.sprites.other.dream_world.front_default,
                types: type,
                height: pokemon.data.height,
                weight: pokemon.data.weight,
                hp: pokemon.data.stats[0].base_stat,
                attack: pokemon.data.stats[1].base_stat,
                defense: pokemon.data.stats[2].base_stat,
                speed: pokemon.data.stats[5].base_stat
            } 
        } catch (error) {
            const pokemonDb = await Pokemon.findOne({
                where:{
                    name: lower //req.query.name
                }
            })
            return res.send(pokemonDb);
        }
        return res.send(obj);

    } else {
        try {
            const pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon');
            const poke2= pokemon.data.results.splice(0, 12);
            for(let i in poke2) {
                let subRequest = await axios.get(`${poke2[i].url}`)
                if(subRequest.data.types.length === 1) {
                    type = subRequest.data.types[0].type.name;
                } else {
                    type = subRequest.data.types[0].type.name + ", " + subRequest.data.types[1].type.name
                }
                var obj = {
                    name: subRequest.data.name,
                    image: subRequest.data.sprites.other.dream_world.front_default,
                    types: type
                }
                array.push(obj);
                console.log(obj); 
            }
        } catch(error) {
            return res.send('ERROR');
        }
        return res.send(array);

    }
}

async function getIdPokemon (req, res) {
    let type;
    try {
        let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.idPokemon}`);
        if(pokemon.data.types.length === 1) {
            type = pokemon.data.types[0].type.name;
        } else {
            type = pokemon.data.types[0].type.name + ", " + pokemon.data.types[1].type.name;
        }
        console.log(type);
        var obj = {
            name: pokemon.data.name,
            id: pokemon.data.id,
            image: pokemon.data.sprites.other.dream_world.front_default,
            types: type,
            height: pokemon.data.height,
            weight: pokemon.data.weight,
            hp: pokemon.data.stats[0].base_stat,
            attack: pokemon.data.stats[1].base_stat,
            defense: pokemon.data.stats[2].base_stat,
            speed: pokemon.data.stats[5].base_stat
        } 
    } catch (error) {
        const pokemonDb = await Pokemon.findOne({
            where:{
                id: req.params.idPokemon
            }
        })
        return res.send(pokemonDb);
    }
    return res.send(obj);
}



async function addPokemon (req, res, next) {
    const id = uuidv4();
    const pokemon = {...req.body, id};
    if(!req.body.name) {
        return res.send({      
            message: 'tenes que llenar los datos',
        });
    }
    /* try {                                                                // asi lo tenia antes de vincularlo con tipos
        const createdPokemon = await Pokemon.create(pokemon);
        return res.send(createdPokemon);
    } */
    try {
        const createdPokemon = await Pokemon.create(pokemon);
        const addType = await createdPokemon.addTipo(req.body.type1, {through:'pokemon_tipo'})
        const addType2= await createdPokemon.addTipo(req.body.type2, {through:'pokemon_tipo'})
        const result = await Pokemon.findOne({
            where: {name: req.body.name},
            include: Tipo
        });
        return res.send(result);
    } catch(error) {
        next(error);
    }

}





module.exports = {
    getApiPokemon,
    getIdPokemon,
    addPokemon,
}



