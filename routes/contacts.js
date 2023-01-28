const express = require('express');
const router = express.Router();

const contactsFunc = require('../controllers/index.js');

router.get('/', contactsFunc.getContacts);

router.get('/:id', contactsFunc.getSingle);

router.post('/', contactsFunc.insertContact);

router.put('/:id', contactsFunc.updateContact);

router.delete('/:id', contactsFunc.deleteContact);

module.exports = router;