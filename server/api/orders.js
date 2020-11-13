const router = require('express').Router()
const {Order, CartItem} = require('../db/models')
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

// GET /api/orders/:orderId
router.get('/:orderId', async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.orderId)
    res.json(order)
  } catch (error) {
    next(error)
  }
})

//POST /api/orders/:orderId/products/:productId
router.post('/:orderId/products/:productId', async (req, res, next) => {
  try {
    // const order = await Order.findByPk(req.params.orderId)
    const orderItem = await CartItem.findOrCreate(
      {
        where: {
          orderId: req.params.orderId,
          productId: req.params.productId
        }
      },
      req.body
    )
    res.json(orderItem)
  } catch (error) {
    next(error)
  }
})
