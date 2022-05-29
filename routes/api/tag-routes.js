const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // Finda all Tags
  Tag.findAll({
    attributes: ['id', 'tag_name'],
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  }).then(dbTag => res.json(dbTag)).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // Finds a single Tag by its `id`
  Tag.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'tag_name'],
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  }).then(dbTag => {
    if (!dbTag) {
      res.status(404).json({ message: 'No tag found with that id' });
      return;
    }
    res.json(dbTag);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  // Creates a new tag
  Tag.create({
    tag_name: req.body.tag_name
  }).then(dbTag => res.json(dbTag)).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  // Updates a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(dbTag => {
    if (!dbTag[0]) {
      res.status(404).json({ message: 'No tag found with that id' });
      return;
    }
    res.json(dbTag);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // Deletes a tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbTag => {
    if (!dbTag) {
      res.status(404).json({ message: 'No tag found with that id' });
      return;
    }
    res.json(dbTag);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;