const { DataTypes} = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {  // ver si es sequelize o si es conn
    id:{
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hp:{
      type: DataTypes.INTEGER
    },
    attack:{
      type: DataTypes.INTEGER
    },
    defense:{
      type: DataTypes.INTEGER
    },
    image:{
      //type: DataTypes.STRING, defaultValue:"https://www.kindpng.com/picc/m/107-1075263_transparent-pokeball-png-pokemon-ball-2d-png-download.png"
      type: DataTypes.STRING, defaultValue:"https://i.ibb.co/yBtK4XG/pokeball.png"
    },
    speed:{
      type: DataTypes.INTEGER
    },
    height:{
      type: DataTypes.INTEGER
    },
    weight:{
      type: DataTypes.INTEGER
    },
    created:{
      type: DataTypes.BOOLEAN, defaultValue:true
    },
  });
};


