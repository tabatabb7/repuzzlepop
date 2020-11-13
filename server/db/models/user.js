// const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 12345
    // validate: {
    //   notEmpty: true,
    //   isLongEnough: function(val) {
    //     if (val.length < 7) {
    //       throw new Error('Please choose a longer password')
    //     }
    //   }
    // }
    // Making `.password` act like a func hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    // get() {
    //   return () => this.getDataValue('password')
    // }
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
    // Making `.salt` act like a function hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    // get() {
    //   return () => this.getDataValue('salt')
    // }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  googleId: {
    type: Sequelize.STRING
  },
  addressStreet1: {
    type: Sequelize.STRING
    // allowNull: false,
    // validate: {
    //   notEmpty: true
    // }
  },
  addressStreet2: {
    type: Sequelize.STRING
    // allowNull: false,
    // validate: {
    //   notEmpty: true
    // }
  },
  addressCity: {
    type: Sequelize.STRING
    // allowNull: false,
    // validate: {
    //   notEmpty: true
    // }
  },
  addressPostal: {
    type: Sequelize.STRING
    // allowNull: false,
    // validate: {
    //   notEmpty: true
    // }
  },
  addressCountry: {
    type: Sequelize.STRING
    // allowNull: false,
    // validate: {
    //   notEmpty: true
    // }
  }
})

module.exports = User

// /**
//  * instanceMethods
//  */
// User.prototype.correctPassword = function (candidatePwd) {
//   return User.encryptPassword(candidatePwd, this.salt()) === this.password()
// }

// /**
//  * classMethods
//  */
// User.generateSalt = function () {
//   return crypto.randomBytes(16).toString('base64')
// }

// User.encryptPassword = function (plainText, salt) {
//   return crypto
//     .createHash('RSA-SHA256')
//     .update(plainText)
//     .update(salt)
//     .digest('hex')
// }

// /**
//  * hooks
//  */
// const setSaltAndPassword = (user) => {
//   if (user.changed('password')) {
//     user.salt = User.generateSalt()
//     user.password = User.encryptPassword(user.password(), user.salt())
//   }
// }

// User.beforeCreate(setSaltAndPassword)
// User.beforeUpdate(setSaltAndPassword)
// User.beforeBulkCreate((users) => {
//   users.forEach(setSaltAndPassword)
// })
