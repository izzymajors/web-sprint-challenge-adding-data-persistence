// build your `/api/resources` router here
const express = require('express');
const db = require('../../data/dbConfig');




const router = express.Router();

router.get('/', (req, res) => {
    db('resource')
    .then(resource => {
        res.json(resource);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to retrieve resource'})
    })
})

router.post('/', (req, res) => {
    const resourceData = req.body;
    db('resource').insert(resourceData)
      .then(ids => {
        db('resource').where({ id: ids[0] })
          .then(newResourceEntry => {
            res.status(201).json(newResourceEntry);
          });
      })
      .catch(err => {
        console.log('POST error', err);
        res.status(500).json({ message: "Failed to store data" });
      });
  });


module.exports = router;