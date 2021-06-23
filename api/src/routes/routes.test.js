/* eslint-disable no-unused-expressions */

var supertest = require('supertest-as-promised')(require('../app'));
var pokemons = require('../routes/pokemons');
var types = require('../routes/types');


describe('Routes', function() {

  beforeEach(function() {
    pokemons.reset();
    types.reset();
  });

  describe('/pokemons', function() {
    it('GET responde con un array de 40 pokemones', function() {
      return supertest // supertest nos permite hacer y testear requests HTTP
        .get('/pokemons') // hacemos un request HTTP: GET a '/families'
        .expect(200) // el codigo de status del response
        .expect('Content-Type', /json/) // podemos testear los headers
        .expect(function(res) {
          expect(res.body).toHaveLength(40); // testeamos la respuesta con el body
        });
    });

    it('POST agrega un nuevo pokemon y lo devuelve', function() {
      pokemons.addPokemon({ "name": "rodrigo","hp": 100,"attack": 88,"defense": 99, "speed": 7,"height": 66, "weight": 4,"type1": 9, "type2":5});
      return supertest
        .post('/pokemons')
        .send({ "name": "rodrigo","hp": 100,"attack": 88,"defense": 99, "speed": 7,"height": 66, "weight": 4,"type1": 9, "type2":5})
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(function(res) {
          expect(res.body).toEqual({ "name": "rodrigo","hp": 100,"attack": 88,"defense": 99, "speed": 7,"height": 66, "weight": 4,"tipos": [ {"id": 9, "name": "steel", }, { "id": 5,  "name": "ground", }
        ]});
        });
    });

    describe('/types', function() {
        it('GET responde con un array de 20 types', function() {
          return supertest // supertest nos permite hacer y testear requests HTTP
            .get('/types') // hacemos un request HTTP: GET a '/families'
            .expect(200) // el codigo de status del response
            .expect('Content-Type', /json/) // podemos testear los headers
            .expect(function(res) {
              expect(res.body).toHaveLength(20); // testeamos la respuesta con el body
            });
        });
    });
  });

 });
