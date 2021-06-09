const {Pokemon} = require('../db.js');
const { v4: uuidv4 } = require('uuid');
const axios = require('axios');


async function getApiPokemon (req, res) {
    let array = [];
    try {
        const pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon');
        const poke2= pokemon.data.results.splice(0, 12);
         poke2.forEach(async element => {
            const subRequest = await axios.get(`${element.url}`);
            if(subRequest.data.types[1]) {
                var obj = {
                    name: subRequest.data.name,
                    image: subRequest.data.sprites.other.dream_world.front_default,
                    types: subRequest.data.types[0].type.name + ", " + subRequest.data.types[1].type.name
    
                }
            } else {
                var obj = {
                    name: subRequest.data.name,
                    image: subRequest.data.sprites.other.dream_world.front_default,
                    types: subRequest.data.types[0].type.name 
                }
            }
            console.log(obj);
            array.push(obj);
        }); 
    } catch(error) {
        return res.send('ERROR');
    }    
    return res.json(array);
}

async function getIdPokemon (req, res) { // hacer params 
    try {
        const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.idPokemon}`);
        res.json(pokemon);  // falta agregar las cosas que pide traer 
    } catch (error) {
        
    }


/*     const pais = async (req, res) => {
        let {idPais} = req.params;
        let {data} = await axios(`https://restcountries.eu/rest/v2/alpha/${idPais}`);
        const con = await Country.findByPk(idPais, {include: Turism});

        if(!con){
        try {
            let {data} = await axios('https://restcountries.eu/rest/v2/all')
            await data.forEach(c => Country.create({
               id: c.alpha3Code,
               name: c.name,
               continent: c.region,
               img: c.flag,
               capital: c.capital
           }))
           return res.redirect(`/countries/${idPais}`)
        } catch {
            res.json({message: 'toto ha fallado!'})
        }
    }
     
    con.subReg = data.subregion;
        con.area = data.area;
        con.pob =  data.population;
        await con.save();
        res.status(200).json(con); */

}

async function getNamePokemon (req, res, next) { //y query

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
    addPokemon,
    getNamePokemon
}