/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');

const agent = session(app);
const pokemon = {
  name: 'Pikachu',
};

describe('Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));
  describe('GET /pokemons', () => {
    it('should get 200', () =>
      agent.get('/pokemons').expect(200)
    );
  });
  
});

describe('POST /pokemons', () => {
  it('responds with 200', () => agent.post('/pokemons').expect(200))
  it('should return the detail of the pokemon', () => 
    agent.post('/pokemons')
    .send({
      name: "Martin",
      hp: 9,
      attack: 4,
      defense: 10,
      speed: 20
      })
      .then(function(res){
        expect(res.body).to.deep.equal({
          name: "Martin",
          hp: 9,
          attack: 4,
          defense: 10,
          speed: 20
        })
}))});
