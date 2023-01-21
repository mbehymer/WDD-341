const routes = require('express').Router();

const myController = require('../controllers');

routes.get('/', myController.awesomeFunction);
routes.get('/contacts', myController.getContacts);
routes.get('/contacts/search', myController.getContacts);
routes.get('/mongoData', myController.getMongoData);
// POST Method
routes.post('/contacts', myController.insertContact);
// PUT Method
routes.put('/contacts', myController.updateContact);
// DELETE Method
routes.delete('/contacts', myController.deleteContact);

module.exports = routes;