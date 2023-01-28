const express = require('express');
const routes = require('express').Router();

// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('../swagger.json');

// router.use('/api-docs', swaggerUi.serve);
// router.get('/api-docs', swaggerUi.setup(swaggerDocument));

routes.get('/', (req, res) => {
    res.send("<a href='./contacts/'>Contacts</a>")
});
routes.use('/contacts', require('./contacts'));


// const swaggerAutogen = require('swagger-autogen')();

module.exports = routes;