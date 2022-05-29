const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // Finds all Categories
  Category.findAll({
    attributes: ['id', 'category_name'],
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  }).then(dbCategory => res.json(dbCategory))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // Finds one Category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'category_name'],
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  }).then(dbCategory => {
    if (!dbCategory) {
      res.status(404).json({ message: 'No category found with that id' });
      return;
    }
    res.json(dbCategory);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  // Creates a new category
  Category.create({
    category_name: req.body.category_name
  }).then(dbCategory => res.json(dbCategory)).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  // Updates a Category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(dbCategory => {
    if (!dbCategory[0]) {
      res.status(404).json({ message: 'No Category found with that id' });
      return;
    }
    res.json(dbCategory);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // Deletes a Category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbCategory => {
    if (!dbCategory) {
      res.status(404).json({ message: 'No category found with that id' });
      return;
    }
    res.json(dbCategory);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;