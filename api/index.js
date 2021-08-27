//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {getAddTypes} =require('./src/handlers/types.js')
const {getAddPokemons} =require('./src/handlers/types.js')



// Syncing all the models at once.
/* conn.sync({ force: true }).then(() => {
  server.listen(3001,  getAddTypes );
  console.log('%s listening at 3001'); // eslint-disable-line no-console
}); */

var force =true;
conn.sync({force}).then(() =>
server.listen(process.env.PORT)
)
.then(async () => force ? await getAddTypes() : null)
.then(async () => force ? await getAddPokemons() : null)
.then(() => force ? console.log('Pokemons y tipos precargados en la base de datos') : null)
.then(() => console.log(`funciona en el ${process.env.PORT}`))
.catch(err => console.log(err))