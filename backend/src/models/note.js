'use strict';
const {
  Model
} = require('sequelize')

function generateId() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  let result = ''
  for (let i = 0; i < 5; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

module.exports = (sequelize, DataTypes) => {
  class Note extends Model {
    static associate(models) {
      // define association here
    }
  }
  Note.init({
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      defaultValue: () => generateId()
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Note',
    hooks: {
      beforeCreate: (note, options) => {
        note.id = generateId();
      },
    },
  });
  return Note;
};