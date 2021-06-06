const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {  // ver si es sequelize o si es conn
   /*  id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    }, */
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    life:{
      type: DataTypes.INTEGER
    },
    strength:{
      type: DataTypes.INTEGER
    },
    defense:{
      type: DataTypes.INTEGER
    },
    speed:{
      type: DataTypes.INTEGER
    },
    height:{
      type: DataTypes.INTEGER
    },
    weight:{
      type: DataTypes.INTEGER
    }
  });

  sequelize.define('tipo', {
   /*  id:{
      type: DataTypes.INTEGER,
      autoIncrement: true

    }, */
    name:{
      type: DataTypes.STRING,
      allowNull: false
    }


  })
};



