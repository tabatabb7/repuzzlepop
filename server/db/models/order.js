const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  submitted: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  orderDate: {
    type: Sequelize.DATEONLY,
    defaultValue: Date.now()
  },
  totalPrice: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
      min: 0
    }
  }
  // orderNumber: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false,
  //   validate: {
  //     notEmpty: true
  //   }
  // }
})

module.exports = Order
