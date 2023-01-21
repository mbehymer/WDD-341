const mongodb = require('../db/connect');

const awesomeFunction = (req, res, next) => {
    res.json('Sarah Haderlie');
};

const getContacts = async (req, res, next) => {

    var result = await mongodb.getDb().db().collection('contacts').find({_id: "63cc4e3e59640482af1a0703"});
    console.log(req._parsedUrl.query);
    console.log(isNaN(req._parsedUrl.query));
    // if (!isNaN(req._parsedUrl.query)) {
    //     result = await mongodb.getDb().db().collection('contacts').find( {}, { projection: { _id: req._parsedUrl.query} });
    //     console.log(result);
    // }

    console.log(req._parsedUrl.query);
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

const getMongoData = async (req, res, next) => {
    const result = await mongodb.getDb().db().collection('contacts').find();
    // console.log(mongodb.getDb().db().collection('contacts').find());
    result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
    });
};

const insertContact = async (req, res, next) => {
    
    // let newPerson = {
    //     birthday: "03/01/1919", email: "mark.jones@gmail.com", favoriteColor: "violet", firstName: "Mark", lastName: "Jones"
    // }
    let person = req.body;
    console.log(person);
    // console.log()
    await mongodb.getDb().db().collection('contacts')
        .insertOne(person)
        .then(result => {
            // console.log(result);
            // console.log(res);
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({err: 'Could not create a new document.'})
        })

}

const updateContact = async (req, res, next) => {
    
    let id = req._parsedUrl.query.replace("_id=", ""); //strip the id
    // console.log(id);
    let update = req.body;
    console.log(update);
    console.log(typeof(update));
    // console.log()
    // res.status(202)
    await mongodb.getDb().db().collection('contacts')
        .findOneAndUpdate({_id: id}, {$set: update})
        .then(result => {
            // console.log(result);
            // console.log(res);
            res.status(204).json(result)
        })
        .catch(err => {
            res.status(500).json({err: 'Could not create a new document.'})
        })

}

const deleteContact = async (req, res, next) => {
    
    let id = req._parsedUrl.query.replace("_id=", ""); //strip the id
    // console.log(id);
    let update = req.body;
    console.log(update);
    console.log(typeof(update));
    // console.log()
    // res.status(202)
    await mongodb.getDb().db().collection('contacts')
        .findOneAndDelete({_id: id})
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({err: 'Could not create a new document.'})
        })

}

module.exports = { awesomeFunction, getContacts, getMongoData, insertContact, updateContact, deleteContact };