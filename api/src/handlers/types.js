const {Tipo, Pokemon} = require('../db.js');
const axios = require ('axios');





 async function getAddTypes (req, res) {
    
    const dbTypes =await Tipo.findAll({
        attributes: {
            exclude: ['createdAt', 'updatedAt','pokemon_tipo']
        }
    });
    if(dbTypes.length === 0) {
        try {
            const types = await axios('https://pokeapi.co/api/v2/type');
            for(let i in types.data.results){
                await Tipo.create({name: types.data.results[i].name, id:types.data.results[i].name});
            }

              
         } catch(error) {
           return res.status(404).send('ERROR!')
         }
        } else {
            return res.status(200).json(dbTypes);
        }
}

async function getAddPokemons (req, res) {
    
    const dbPokemon =await Pokemon.findAll({
        attributes: {
            exclude: ['createdAt', 'updatedAt','pokemon_tipo']
        }
    });
    if(dbPokemon.length === 0) {
        try {
            
             var pokemon1 = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
            const res1 = await Promise.all(pokemon1.data.results.map(async pokemon => {
             let subRequest = await axios.get(pokemon.url)
             var result = await Pokemon.create({ name: subRequest.data.name, id: subRequest.data.id, hp: subRequest.data.stats[0].base_stat, attack: subRequest.data.stats[1].base_stat, defense: subRequest.data.stats[2].base_stat, image: subRequest.data.sprites.other.dream_world.front_default, speed: subRequest.data.stats[5].base_stat, weight: subRequest.data.weight, height: subRequest.data.height, created: false})
             await result.addTipo(subRequest.data.types.map(tipo => {
                 return tipo.type.name
             }))        
            }))          
         } catch(error) {
           return res.status(404).send('ERROR!')
         }
        } else {
            return res.status(200).json(dbPokemon);
        }
}


module.exports = {
    getAddTypes,
    getAddPokemons
}
