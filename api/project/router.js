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

router.post('/', (req, res) => {
    const projectsData = req.body;
    db('fruits').insert(projectsData)
      .then(ids => {
        db('projects').where({ id: ids[0] })
          .then(newProjectsEntry => {
            res.status(201).json(newProjectsEntry);
          });
      })
      .catch(err => {
        console.log('POST error', err);
        res.status(500).json({ message: "Failed to store data" });
      });
  });


module.exports = router;