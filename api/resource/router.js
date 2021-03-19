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



module.exports = router;