const {Pokemon, Tipo} = require('../db.js');
const { v4: uuidv4 } = require('uuid');
const axios = require('axios');


const itemsPerPage = 12


async function getApiPokemon (req, res,next) {
    var {name, type, orderBy, orderType, filter, page } = req.query;
    name = name ? name.toLowerCase() : name
    const validate = ['null', undefined, '', 'undefined', ""]    
    if (validate.includes(name)) name = false
    if (validate.includes(type)) type = false
    if (validate.includes(filter)) filter = '' 
    if (validate.includes(page)) page = 1 
    if (validate.includes(orderBy)) orderBy = 'createdAt'
    //if (validate.includes(orderBy)) orderBy ='id'
    if (validate.includes(orderType)) orderType = 'DESC'
    //if (validate.includes(orderType)) orderType = 'ASC'
    const count = await Pokemon.findAll({
        where: name? {name: name}: filter? {created: filter}: null,
        include: {                
            model: Tipo,
            where: type ? {
                id: type
            } : null,
            through: {
                attributes: [],
            },
            attributes: ['name']
        },
    })
    try{
            var pokeDB = await Pokemon.findAll({
                where: name? {name: name}: filter? {created: filter}: null,
                include: {                
                    model: Tipo,
                    where: type ? {
                        id: type
                    } : null,
                    through: {
                        attributes: [],
                    },
                    attributes: ['name']
                },
                order:[[orderBy, orderType]], 
                attributes: ['name', 'image', 'id','attack','created','createdAt'],    
                offset: (page - 1) * itemsPerPage,
                limit: itemsPerPage,
            })
            if(pokeDB.length === 0){
                var lower = req.query.name ? req.query.name.toLowerCase() : null;
                try{
                let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${lower}`);
                var result = await Pokemon.create({ name: pokemon.data.name, id: pokemon.data.id, hp: pokemon.data.stats[0].base_stat, attack: pokemon.data.stats[1].base_stat, defense: pokemon.data.stats[2].base_stat, image: pokemon.data.sprites.other.dream_world.front_default, speed: pokemon.data.stats[5].base_stat, weight: pokemon.data.weight, height: pokemon.data.height, created: false})
                await result.addTipo(pokemon.data.types.map(tipo => {
                    return tipo.type.name
                }))
                var pokeDB = await Pokemon.findAll({
                    where: name? {name: name}: filter? {created: filter}: null,
                    include: {                
                        model: Tipo,
                        where: type ? {
                            id: type
                        } : null,
                        through: {
                            attributes: [],
                        },
                        attributes: ['name']
                    },
                    order:[[orderBy, orderType]], 
                    attributes: ['name', 'image', 'id','attack','created','createdAt'],    
                    offset: (page - 1) * itemsPerPage,
                    limit: itemsPerPage,
                }) 
                }catch(error){
                    next(error);
                }
            }      
            return res.json({totalPage: Math.ceil(count.length / itemsPerPage), pokeDB}); 
        }catch(err){
            next(err);
        }


}


 

async function getIdPokemon (req, res){
    if(req.params.idPokemon.length > 20) {
        try{
            var finalPokemon = await Pokemon.findOne({
                where:{
                    id: req.params.idPokemon},
                include: {
                    model: Tipo,
                    attributes: {
                        include: ['id', 'name'],
                        exclude: ['createdAt', 'updatedAt','pokemon_tipo']
                    },
                    through: {
                        attributes: []
                    }
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt','pokemon_tipo']
                }
            })

        }catch (error){
            return res.send({message: 'Bad Request'})
        }
        return res.send(finalPokemon);
    } else {
        try{
            let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.idPokemon}`);
            var obj = {
                name: pokemon.data.name,
                id: pokemon.data.id,
                image: pokemon.data.sprites.other.dream_world.front_default,
                tipos: pokemon.data.types.map(tipo => {
                    return {name: tipo.type.name}
                }),
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
    const id = uuidv4();
    var pokemon = {...req.body, id};

    if(req.body.name = req.body.name.toUpperCase()) let check = req.body.name
    if(!req.body.name || check || !req.body.type1 || req.body.height > 255|| req.body.weight > 255 || req.body.hp > 255 || req.body.attack > 255 || req.body.defense > 255 || req.body.speed > 255) {
        return res.status(500).send({      
            message: 'error',
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
            include: {
                model: Tipo,
                attributes: {
                    include: ['name'],
                    exclude: ['createdAt', 'updatedAt','product_categories']
                },
                through: {
                    attributes: []
                }
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt','product_categories']
            }})
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

