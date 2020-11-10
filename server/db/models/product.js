const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  origPrice: {
    type: Sequelize.FLOAT
  },
  resellPrice: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  image: {
    type: Sequelize.TEXT
  },
  rating: {
    type: Sequelize.FLOAT,
    validate: {
      min: 0.0,
      max: 5.0
    }
  },
  stock: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Product
