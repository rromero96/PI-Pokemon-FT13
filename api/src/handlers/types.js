const {Tipo} = require('../db.js');
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
                await Tipo.create({name: types.data.results[i].name});
            }
              
         } catch(error) {

           return res.status(404).send('ERROR!')
         }
        } else {
            return res.status(200).json(dbTypes);
        }
}


module.exports = {
    getAddTypes
}




