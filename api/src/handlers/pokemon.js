const {Pokemon, Tipo} = require('../db.js');
const { v4: uuidv4 } = require('uuid');
const axios = require('axios');


const itemsPerPage = 12


async function getApiPokemon (req, res,next) {
    var {name, type, orderBy, orderType, filter, page } = req.query;
    const validate = ['null', undefined, '']    
    if (validate.includes(name)) name = false
    if (validate.includes(type)) type = false
    if (validate.includes(filter)) filter = '' 
    if (validate.includes(page)) page = 1 
    //if (validate.includes(orderBy)) orderBy = 'createdAt'
    if (validate.includes(orderBy)) orderBy ='id'
    //if (validate.includes(orderType)) orderType = 'DESC'
    if (validate.includes(orderType)) orderType = 'ASC'
    try{
            var pokeDB = await Pokemon.findAll({
                where: name? {name: name}: filter? {from: filter}: null,
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
                attributes: ['name', 'image', 'id','attack','created'],    
                offset: (page - 1) * itemsPerPage,
                limit: itemsPerPage,
            })
            if(pokeDB.length === 0){
                var lower = req.query.name.toLowerCase();
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
                    attributes: ['name', 'image', 'id','attack','created'],    
                    offset: (page - 1) * itemsPerPage,
                    limit: itemsPerPage,
                }) 
                }catch(error){
                    next(error);
                }
            }
            return res.json(pokeDB); 
            //return res.json({totalPage: Math.ceil(pokeDB.length / itemsPerPage), pokeDB}); 
        }catch(err){
            next(err);
        }


}


/* async function getApiPokemon (req, res,next) {
    const {name, type, order, filter } = req.query;
    //const validate = ['null', undefined, 'undefined', '']
    //if (validate.includes(name)) name = ''
    //if (validate.includes(type)) type = 1
    //if (validate.includes(order)) order = ''
    //if (validate.includes(filter)) filter = ''
    var poke2 = await Pokemon.findAll();
    if(!poke2.length){
        try{
        const pokemon1 = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
                console.log(pokemon1);
                const res1 = await Promise.all(pokemon1.data.results.map(async pokemon => {
                    let subRequest = await axios.get(pokemon.url)
                    
                        var result = await Pokemon.create({ name: subRequest.data.name, id: subRequest.data.id, hp: subRequest.data.stats[0].base_stat, attack: subRequest.data.stats[1].base_stat, defense: subRequest.data.stats[2].base_stat, image: subRequest.data.sprites.other.dream_world.front_default, speed: subRequest.data.stats[5].base_stat, weight: subRequest.data.weight, height: subRequest.data.height, created: false})
                        await result.addTipo(subRequest.data.types.map(tipo => {
                            return tipo.type.name
                        }))        
                }))
                console.log(res1)            
                var pokeDB = await Pokemon.findAll({
                    include: {                
                            model: Tipo,
                            through: {
                                attributes: [],
                            },
                            attributes: ['name']
                        },
                    attributes: ['name', 'image', 'id','attack','created']    
                })
                var result = pokeDB
        }catch(err){
            next(err);
        }

    } else {
        try{
            var pokeDB = await Pokemon.findAll({
                include: {                
                        model: Tipo,
                        through: {
                            attributes: [],
                        },
                        attributes: ['name']
                    },
                attributes: ['name', 'image', 'id','attack','created']    
            })
            var result = pokeDB
        }catch(err){
            next(err);
        }

    }
    if(name) {
        var lower = req.query.name.toLowerCase();
        try {
            let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${lower}`); 
            result = {
                name: pokemon.data.name,
                id: pokemon.data.id,
                image: pokemon.data.sprites.other.dream_world.front_default,
                tipos: pokemon.data.types.map((tipo) => {
                    return {name: tipo.type.name}
                })} 
        } catch (error) {
            result = await Pokemon.findOne({
                where: {
                    name:  lower
                },
                include: {                
                    model: Tipo,
                    through: {
                        attributes: [],
                    },
                    attributes: ['name', 'id']
                },
               attributes: ['name', 'image', 'id','attack','created'] 
           })
            if(!result) {
                return res.status(404).send({message: 'The pokemon you are looking for does not exist'})
            }
        }
       
    } else {
        if(type){
        result = result.filter((poke) => {for(let i in poke.tipos){if (poke.tipos[i].name === type){return poke}}})
        if(!result.length) return res.status(404).send({message: 'the type you requested does not exist'})
        } 
        if(order){
            if(order === 'az'){
            result = result.sort((a, b) => {
                const first = a.name;
                const last = b.name;
                if(first < last ){
                    return -1;
                } 
                if(first > last) {
                    return 1;
                } else {
                    return 0;
                }
            })
            }
            if(order ==='za'){
            result = result.sort((a, b) => {
                const first = a.name;
                const last = b.name;
                if(first > last ){
                    return -1;
                } 
                if(first < last) {
                    return 1;
                } else {
                    return 0;
                }
            }) 
            }
           if(order === 'strongest') result = result.sort((a,b) => b.attack - a.attack)
           if(order === 'weakest')result = result.sort((a,b) => a.attack - b.attack) 
           if(order === 'null') result =result
         }
         if(filter){
            if(filter === 'api') result = result.filter(c => c.created !== true)
            if(filter === 'db') result = result.filter(c => c.created === true)
            if(filter === 'all' || filter === 'null') result = result
         }

    }
    
     
    return res.send(result); 
} */
 
 
 

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

