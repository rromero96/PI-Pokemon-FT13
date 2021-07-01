const {Pokemon, Tipo} = require('../db.js');
const { v4: uuidv4 } = require('uuid');
const axios = require('axios');

 async function getApiPokemon (req, res) {
    let type;
    if(req.query.name) {
        var lower = req.query.name.toLowerCase();
        try {
            let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${lower}`); 
            if(pokemon.data.types.length === 1) {
                type = pokemon.data.types[0].type.name;
            } else {
                type = pokemon.data.types[0].type.name + " " + pokemon.data.types[1].type.name;
            }
            console.log(type);
            var obj = {
                name: pokemon.data.name.charAt(0).toUpperCase() + pokemon.data.name.slice(1),
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
                    name: lower
                },
                include: Tipo
            })
            if(!pokemonDb) {
                return res.status(404).send({message: 'Bad Request'})
            }
            if(pokemonDb.tipos.length === 1) {
                type = pokemonDb.tipos[0].name;
            } else {
                type = pokemonDb.tipos[0].name + " " + pokemonDb.tipos[1].name;
            }
            var finalPokemon ={
                name : pokemonDb.name.charAt(0).toUpperCase() + pokemonDb.name.slice(1),
                id: pokemonDb.id,
                types: type,
                height: pokemonDb.height,
                weight: pokemonDb.weight,
                image: "https://www.kindpng.com/picc/m/107-1075263_transparent-pokeball-png-pokemon-ball-2d-png-download.png",
                hp: pokemonDb.hp,
                attack: pokemonDb.attack,
                defense: pokemonDb.defense,
                speed: pokemonDb.speed

            } 
            return res.send(finalPokemon);
            
        }
        return res.send(obj);

    } else {
        try {
            const pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon');
            const pokemon2 = await axios.get(pokemon.data.next);
            const poke2= pokemon.data.results.concat(pokemon2.data.results);
            const res1 = await Promise.all(poke2.map(async pokemon => {
                let subRequest = await axios.get(pokemon.url)
                if(subRequest.data.types.length === 1) {
                    type = subRequest.data.types[0].type.name;
                } else {
                    type = subRequest.data.types[0].type.name + " " + subRequest.data.types[1].type.name
                }
                return  {
                    name: subRequest.data.name.charAt(0).toUpperCase() + subRequest.data.name.slice(1),
                    image: subRequest.data.sprites.other.dream_world.front_default,
                    id: subRequest.data.id, 
                    types: type
                }
                
            }))
            const pokedb = await Pokemon.findAll({
                include: {
                    attributes: ['name'],
                    model: Tipo,
                    through: {
                        attributes: [],
                    }
                }
            })
            const pokedb2 = pokedb.reverse().map(result => {
                if(result.tipos.length === 1) {
                    type = result.tipos[0].name;
                } else {
                    type = result.tipos[0].name + " " + result.tipos[1].name;
                }
                return {
                    name: result.name.charAt(0).toUpperCase() + result.name.slice(1),
                    image: "https://www.kindpng.com/picc/m/107-1075263_transparent-pokeball-png-pokemon-ball-2d-png-download.png",
                    id: result.id,
                    types: type,
                }

            })
            var result = pokedb2.concat(res1);
        } catch(error) {
            return res.send('ERROR');
        }
    return res.send(result); 
    }
} 
 

async function getIdPokemon (req, res){
    let type;
    if(req.params.idPokemon.length > 20) {
        try{
            var pokemonDb = await Pokemon.findOne({
                where:{
                    id: req.params.idPokemon
                },
                include: Tipo
            })
            if(pokemonDb.tipos.length === 1) {
                type = pokemonDb.tipos[0].name;
            } else {
                type = pokemonDb.tipos[0].name + " " + pokemonDb.tipos[1].name;
            }
            var finalPokemon ={
                name : pokemonDb.name.charAt(0).toUpperCase() + pokemonDb.name.slice(1),
                id: pokemonDb.id,
                types: type,
                height: pokemonDb.height,
                weight: pokemonDb.weight,
                hp: pokemonDb.hp,
                attack: pokemonDb.attack,
                defense: pokemonDb.defense,
                speed: pokemonDb.speed
            } 

        }catch (error){
            console.log(finalPokemon);
            return res.status(404).send({message: 'Bad Request'})
        }
        return res.send(finalPokemon);
    } else {
        try{
            let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.idPokemon}`);
            if(pokemon.data.types.length === 1) {
                type = pokemon.data.types[0].type.name;
            } else {
                type = pokemon.data.types[0].type.name + " " + pokemon.data.types[1].type.name;
            }
            console.log(type);
    
            var obj = {
                name: pokemon.data.name.charAt(0).toUpperCase() + pokemon.data.name.slice(1),
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
        }catch (error) {
            return res.status(404).send({message: 'Bad Request'})  
        }
        return res.send(obj);
    }
}



async function addPokemon (req, res, next) {
    let type;
    const id = uuidv4();
    const pokemon = {...req.body, id};
    if(!req.body.name) {
        return res.send({      
            message: 'tenes que llenar los datos',
        });
    }
    try {
        const createdPokemon = await Pokemon.create(pokemon);
        const addType = await createdPokemon.addTipo(req.body.type1, {through:'pokemon_tipo'})
        const addType2= await createdPokemon.addTipo(req.body.type2, {through:'pokemon_tipo'})
        const result = await Pokemon.findOne({
            where: {
                name: req.body.name
            },
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

