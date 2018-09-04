const publishers = require('express').Router();
const Publisher = require('../../models').Publisher;

publishers.get('/', (req, res) => {
    Publisher.findAll().then(publishers => res.json(publishers));
});

publishers.get('/:publisherId', (req, res) => {
    if (req.params.publisherId) {
        Publisher.findById(req.publisherId).then(publisher => res.json(publisher));
    }
});

publishers.post('/', (req, res) => {
    Publisher
        .create({
            name: req.body.name,
        })
        .then(publisher => res.status(201).send(publisher))
        .then(error => res.status(400).send(error));
});

module.exports = publishers;
