// build your `/api/projects` router here
const express = require('express');
const db = require('../../data/dbConfig');



const router = express.Router();

router.get('/', (req, res) => {
    db('projects')
    .then(projects => {
        res.json(projects);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to retrieve projects'})
    })
})



module.exports = router;