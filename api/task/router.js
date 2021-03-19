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

router.post('/', (req, res) => {
    const taskData = req.body;
    db('task').insert(taskData)
      .then(ids => {
        db('task').where({ id: ids[0] })
          .then(newTaskEntry => {
            res.status(201).json(newTaskEntry);
          });
      })
      .catch(err => {
        console.log('POST error', err);
        res.status(500).json({ message: "Failed to store data" });
      });
  });



module.exports = router;