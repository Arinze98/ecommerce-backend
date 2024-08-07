const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const auth = require('../middlewares/auth');

// @route   POST /api/orders
// @desc    Create an order
// @access  Private
router.post('/', auth, async (req, res) => {
  const { products, totalAmount } = req.body;

  try {
    const newOrder = new Order({
      user: req.user.id,
      products,
      totalAmount,
    });

    const order = await newOrder.save();
    res.json(order);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route  
