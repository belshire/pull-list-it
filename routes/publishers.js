const publishers = require('express').Router();
const Publisher = require('../models').Publisher;

publishers.get('/', (req, res) => {
    Publisher.findAll().then(publishers => res.json(publishers));
});

publishers.get('/:publisherId', (req, res) => {
    if (req.params.publisherId) {
        Publisher.findById(req.params.publisherId).then(publisher => res.json(publisher));
    }
});

publishers.post('/', (req, res) => {
    Publisher
        .create({
            name: req.body.name,
        })
        .then(new_publisher => res.status(201).send(new_publisher))
        .catch(error => res.status(400).send(error));
});

module.exports = publishers;
