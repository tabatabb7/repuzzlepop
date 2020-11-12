const User = require('./user')
const Product = require('./product')
const db = require('../db')

User.hasMany(Product, {
  foreignKey: 'purchasedBy'
})
Product.belongsTo(User, {
  foreignKey: 'purchasedBy'
})

User.hasMany(Product, {
  foreignKey: 'listedBy'
})
Product.belongsTo(User, {
  foreignKey: 'listedBy'
})

// User.belongsToMany(Product, {
//   foreignKey: 'purchasedBy',
// })
// User.belongsToMany(Product, {
//   foreignKey: 'listedBy',
// })
// Product.belongsToMany(User, {
//   foreignKey: 'listedBy'
// })

// const Movie = sequelize.define('Movie', { name: DataTypes.STRING });
// const Actor = sequelize.define('Actor', { name: DataTypes.STRING });
// const ActorMovies = sequelize.define('ActorMovies', {
//   MovieId: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: Movie, // 'Movies' would also work
//       key: 'id'
//     }
//   },
//   ActorId: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: Actor, // 'Actors' would also work
//       key: 'id'
//     }
//   }
// });
// Movie.belongsToMany(Actor, { through: ActorMovies });
// Actor.belongsToMany(Movie, { through: ActorMovies });
// Movie.belongsToMany(Actor, { through: ActorMovies });
// Actor.belongsToMany(Movie, { through: ActorMovies });

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  db,
  User,
  Product
}
