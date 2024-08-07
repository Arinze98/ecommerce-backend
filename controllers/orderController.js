const Order = require('../models/order');

exports.createOrder = async (req, res) => {
  const { user, products, total } = req.body;

  try {
    const order = new Order({ user, products, total });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('user').populate('products.product');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};
