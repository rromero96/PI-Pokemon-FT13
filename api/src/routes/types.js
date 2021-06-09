const { Router } = require('express');
const {getAddTypes} = require ('../handlers/types.js')

/* var { Tipo } = require('../db.js');
const axios =require('axios').default; */

const router = Router();


router.get('/types', getAddTypes);



module.exports =router;
