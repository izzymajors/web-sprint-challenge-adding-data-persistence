// build your `/api/tasks` router here
const express = require('express');
const db = require('../../data/dbConfig');



const router = express.Router();

router.get('/', (req, res) => {
    db('task')
    .then(task => {
        res.json(task);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to retrieve task'})
    })
})



module.exports = router;