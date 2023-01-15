const routes = require('express').Router();

const myController = require('../controllers');

routes.get('/', myController.awesomeFunction);
routes.get('/contacts', myController.getContacts);
routes.get('/mongoData', myController.getMongoData);

module.exports = routes;