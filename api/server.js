// build your server here and require it from index.js
const express = require('express');
const helmet = require('helmet');

const projectsRouter = require('./project/router');
const resourceRouter = require('./resource/router')
const taskRouter = require('./task/router')

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectsRouter)
server.use('/api/resource', resourceRouter)
server.use('/api/task', taskRouter)


module.exports = server;