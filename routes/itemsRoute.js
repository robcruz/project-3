const express = require('express');
const router = express.Router();

// Item model
const ItemsRoute = require('../models/items');

// @route   GET /api/items/
// @desc    Get all items
// @access  Public
router.get('/', async (req, res) => {
  try {
    const items = await ItemsRoute.find({});
    res.send({ items: items })
  } catch(err) {
    res.status(400).send({ error: err });
  }
});

// @route   GET /api/items/:id
// @desc    Get a specific item
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const item = await ItemsRoute.findById(req.params.id);
    res.send({ item: item });
  } catch (err) {
    res.status(404).send({ message: 'Item not found!' });
  }
});

// @route   POST /api/items/
// @desc    Create a item
// @access  Public
router.post('/', async (req, res) => {
  try {
    const newItem = await ItemsRoute.create({ name: req.body.name, email: req.body.email, itemNumber: req.body.itemNumber });
     res.send({ newItem: newItem });
  } catch(err) {
    res.status(400).send({ error: err });
  }

});

// @route   PUT /api/items/:id
// @desc    Update a item
// @access  Public
router.put('/:id', async (req, res) => {
  try {
    const itemUpdated = await ItemsRoute.findByIdAndUpdate(req.params.id, req.body);
     res.send({ message: 'The item was updated' });
  } catch(err) {
    res.status(400).send({ error: err });
  }
});

// @route   DELETE /api/items/:id
// @desc    Delete a item
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const removeItem = await ItemsRoute.findByIdAndRemove(req.params.id);
     res.send({ message: 'The item was removed' });
  } catch(err) {
    res.status(400).send({ error: err });
  }
});


module.exports = router;
