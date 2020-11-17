const {expect} = require('chai')

// const _app = require('../../server/app');
// const app = require('supertest')(_app);

const {db, models: {Order, CartItem, Product}} = require('../../server/db')

describe('Order Route Tests', () => {
  describe('Single Order', () => {
    let orders
    let cartItems
    let products

    beforeEach(async () => {
      await db.sync({force: true})

      products = [
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
        },
        {
          name: 'Camelot',
          origPrice: 17.36,
          resellPrice: 11.7,
          description: 'morbi vel lectus',
          image: '/images/camelot.png',
          rating: 0.87,
          stock: 6
        },
        {
          name: 'Candy Land',
          origPrice: 29.92,
          resellPrice: 14.71,
          description: 'elit sodales scelerisque mauris sit amet',
          image: '/images/candy-land.png',
          rating: 2.34,
          stock: 1
        }
      ]

      const [product1, product2, product3, product4] = await Product.bulkCreate(
        products
      )

      orders = [
        {
          submitted: false,
          orderDate: '2020-11-12',
          totalPrice: 25,
          userId: 1
        },
        {
          submitted: false,
          orderDate: '2020-11-12',
          totalPrice: 12,
          userId: 2
        },
        {
          submitted: false,
          orderDate: '2020-11-12',
          totalPrice: 45,
          userId: 3
        }
      ]

      const [order1, order2, order3] = await Order.bulkCreate(orders)

      cartItems = [
        {
          quantity: 1,
          historicalPrice: 25,
          orderId: 1,
          productId: 1
        },
        {
          quantity: 1,
          historicalPrice: 25,
          orderId: 2,
          productId: 2
        },
        {
          quantity: 1,
          historicalPrice: 25,
          orderId: 3,
          productId: 3
        },
        {
          quantity: 1,
          historicalPrice: 25,
          orderId: 3,
          productId: 4
        }
      ]

      const [
        cartItem1,
        cartItem2,
        cartItem3,
        cartItem4
      ] = await CartItem.bulkCreate(cartItems)
    })

    describe('GET /api/orders/:singleOrder', () => {
      it('responds with a single order', async () => {
        const response = await app.get('/api/orders/1')
        expect(response.status).to.equal(200)
        expect(response.body).to.be.an('object')
        expect(response).to.include(25)
      })
    })

    describe('GET /api/orders/:orderId/products', () => {
      it('responds with all a single product in the order', async () => {
        const response = await app.get('/api/orders/3/1')
        expect(response.status).to.equal(200)
        expect(response.body).to.be.an('object')
        expect(response).to.include('Camelot')
      })
    })
  })
})
