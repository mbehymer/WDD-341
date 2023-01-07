const rts = require('express').Router();

rts.get("/", (req, res) => res.send("Sarah Cooper"));

rts.get("/parents", (req, res) => res.json({"father": "Kirk Haderlie", "mother": "Katherine Haderlie"}));

module.exports = rts;
