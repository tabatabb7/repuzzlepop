const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  origPrice: {
    type: Sequelize.INTEGER,
    validate: {},
  },
  resellPrice: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {},
  },
  description: {
    type: Sequelize.TEXT,
  },
  image: {
    type: Sequelize.TEXT,
    //defaultValue: 'default.png'
  },
  rating: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0.0,
      max: 5.0,
    },
  },
  stock: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
})

module.exports = Product
