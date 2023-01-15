const mongodb = require('../db/connect');

const awesomeFunction = (req, res, next) => {
    res.json('Sarah Haderlie');
};

const getContacts = async (req, res, next) => {
    const result = await mongodb.getDb().db().collection('contacts').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

const getMongoData = async (req, res, next) => {
    const result = await mongodb.getDb().db().collection('contacts').find();
    result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
    });
};

module.exports = { awesomeFunction, getContacts, getMongoData };