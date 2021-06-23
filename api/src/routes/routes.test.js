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
