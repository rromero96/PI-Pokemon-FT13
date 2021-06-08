const { Router } = require('express');

/* var { Tipo } = require('../db.js');
const axios =require('axios').default; */

const router = Router();


router.get('/types', function(req, res){
    return res.send('hola como andas');

});



module.exports =router;
