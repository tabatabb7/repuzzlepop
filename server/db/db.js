const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')

const db = new Sequelize(
  process.env.DATABASE_URL ||
    'postgres://fvzvvorhhepyed:67bad3671476ffc22bb1bf46347aa1b2523ec0956e2b78ca4a4672c96f4fc4b7@ec2-54-205-183-19.compute-1.amazonaws.com:5432/depv4p2q7826fh',
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: true
    }
  }
)
module.exports = db

// This is a global Mocha hook used for resource cleanup.
// Otherwise, Mocha v4+ does not exit after tests.
if (process.env.NODE_ENV === 'test') {
  after('close database connection', () => db.close())
}
