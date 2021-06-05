const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const Pokemon = sequelize.define('pokemon', {
    id:{
      type: S.DataTypes.UUID,
      defaultValue: S.DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: S.DataTypes.STRING,
      allowNull: false
    },
    life:{
      type: S.DataTypes.INTEGER
    },
    strength:{
      type: S.DataTypes.INTEGER
    },
    defense:{
      type: S.DataTypes.INTEGER
    },
    speed:{
      type: S.DataTypes.INTEGER
    },
    height:{
      type: S.DataTypes.INTEGER
    },
    weight:{
      type: S.DataTypes.INTEGER
    }
  });

  const Tipo = sequelize.define('tipo', {
    id:{
      type: S.DataTypes.INTEGER,
      autoIncrement: true

    },
    name:{
      type: S.DataTypes.STRING,
      allowNull: false
    }


  })
};


/* [ ] Pokemon con las siguientes propiedades:
ID (Número de Pokemon) * : No puede ser un ID de un pokemon ya existente en la API pokeapi
Nombre *
Vida
Fuerza
Defensa
Velocidad
Altura
Peso
