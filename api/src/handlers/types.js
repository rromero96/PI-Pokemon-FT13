const {Tipo} = require('../db.js');
const axios = require ('axios');

async function getAddTypes (req, res) {
    const dbTypes =await Tipo.findAll();
    if(dbTypes.length === 0) {
        try {
            const types = await axios('https://pokeapi.co/api/v2/type');
            for(let i in types.data.results){
                await Tipo.create({name: types.data.results[i].name});
                console.log(types.data.results[i].name)
            }
              return res.redirect('/types');
         } catch(error) {
            res.status(404).send('ERROR!')
         }
        }
        return res.status(200).json(dbTypes);
}

module.exports = {
    getAddTypes
}