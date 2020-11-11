const {green, red} = require('chalk')
const {Product, User} = require('./server/db')
const db = require('./server/db')
// const {products} = require('./data-user')
// const {users} = require('./data-product')

console.log('db is = ', db)

const seed = async () => {
  try {
    await db.sync({force: true})

    const products = [
      {
        name: 'Dr. J Basketball Game',
        origPrice: 40.55,
        resellPrice: 23.28,
        description: 'massa donec dapibus duis at velit',
        image: '/images/basketball-game.png',
        rating: 2.83,
        stock: 1
      },
      {
        name: 'Blink',
        origPrice: 31.13,
        resellPrice: 25.27,
        description:
          'metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque',
        image: '/images/blink.png',
        rating: 3.71,
        stock: 1
      }
    ]

    const users = [
      {
        email: 'lvogeler0@cdc.gov',
        password: 'gpTPC8',
        firstName: 'Laurella',
        lastName: 'Vogeler',
        googleId: '39395894056063953528',
        addressStreet1: '0754 Center Pass',
        addressStreet2: 'Apt 1',
        addressCity: 'Merdeka',
        addressPostal: '',
        addressCountry: 'Indonesia'
      },
      {
        email: 'kgarbar1@issuu.com',
        password: 'xvJx9gPtE7p',
        firstName: 'Karon',
        lastName: 'Garbar',
        googleId: '75701792457577231135',
        addressStreet1: '90748 Ridge Oak Junction',
        addressStreet2: 'Apt 2',
        addressCity: 'Keswick',
        addressPostal: 'L4P',
        addressCountry: 'Canada'
      }
    ]

    const [basketball, blink] = await Product.bulkCreate(products)
    console.log(green('Seeded products'))

    const [lvogeler0, kgarbar1] = await User.bulkCreate(users)
    console.log(green('Seeded users'))
  } catch (error) {
    console.log(red(error))
  }
}

module.exports = seed

if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'))
      db.close()
    })
    .catch(err => {
      console.error(red('Oh noes! Something went wrong!'))
      console.error(err)
      db.close()
    })
}
