const router = require('express').Router()
const {Order, CartItem, Product} = require('../db/models')
module.exports = router

// GET /api/orders
router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll()
    res.json(orders)
  } catch (error) {
    next(error)
  }
})

// GET /api/orders/shopping_cart
router.get('/shopping_cart', async (req, res, next) => {
  try {
    console.log('req.user-->', req.user)
    if (req.user) {
      console.log('req.user-->', req.user)
      const order = await Order.findOrCreate({
        where: {
          userId: req.user.dataValues.id,
          submitted: false
        },
        include: Product
      })
      console.log('in orders route: ', order)
      res.json(order)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

//POST /api/orders/:orderId/products/:productId
router.post('/:orderId/products/:productId', async (req, res, next) => {
  try {
    const orderItem = await CartItem.findOrCreate({
      where: {
        orderId: req.params.orderId,
        productId: req.params.productId
      },
      defaults: {
        quantity: req.body.quantity
      }
    })
    console.log(orderItem)
    res.json(orderItem)
  } catch (error) {
    next(error)
  }
})

//PUT /api/orders/:orderId/products/:productId
router.put('/:orderId/products/:productId', async (req, res, next) => {
  console.log('req.params.orderId from PUT--->', req.params.orderId)
  console.log('req.params.productId from PUT --->', req.params.productId)
  console.log('req.body.quantity from PUT--->', req.body.quantity)
  console.log('req.body from PUT --->', req.body)
  try {
    await CartItem.update(
      {
        quantity: req.body.quantity
      },
      {
        where: {
          orderId: req.params.orderId,
          productId: req.params.productId
        }
      }
    )
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})

//DELETE /api/orders/:orderId/products/:productId
router.delete('/:orderId/products/:productId', async (req, res, next) => {
  try {
    await CartItem.destroy({
      where: {
        orderId: req.params.orderId,
        productId: req.params.productId
      }
    })
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})
