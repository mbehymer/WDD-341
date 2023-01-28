const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getContacts = async (req, res, next) => {
    console.log("============== ARRIVED ============")
    try {
        const result = await mongodb.getDb().db().collection('contacts').find();
        result.toArray().then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists);
        });
    } catch (err) {
        console.log(err)
    }
    
};

const getSingle = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection('contacts').find({ _id: userId });
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });

}

const insertContact = async (req, res, next) => {
    
    let person = req.body;
    console.log(person);
    // console.log()
    const result = await mongodb.getDb().db().collection('contacts')
        .insertOne(person);
    if (result.acknowledged) {
            res.status(201).json(result)
    } else {
        res.status(500).json({err: 'Could not create a new contact.'})
    }

}

const updateContact = async (req, res, next) => {
    
    let id = new ObjectId(req.params.id);
    let update = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    }
    console.log(update);
    
    let result = await mongodb.getDb().db().collection('contacts')
        .replaceOne({ _id: id }, update);//({_id: id}, {$set: update});
    if (result.modifiedCount > 0) {
        res.status(204).json(result);
    } else {
        res.status(500).json({err: 'Could not update contact with id: ' + id})
    }

}

const deleteContact = async (req, res, next) => {
    
    let id = new ObjectId(req.params.id);
    
    let result = await mongodb.getDb().db().collection('contacts')
        .findOneAndDelete({_id: id});
    if (result) {
            res.status(200).json(result)
    }
    else {
        res.status(500).json({err: 'There was an error deleting contact with id: ' + id});
    }

}

module.exports = { getContacts, getSingle, insertContact, updateContact, deleteContact };