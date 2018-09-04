const Publisher = require('../models').Publisher;

module.exports = {
    create(req, res) {
        return Publisher
            .create({
                name: req.body.name,
            })
            .then(publisher => res.status(201).send(publisher))
            .then(error => res.status(400).send(error));
    }
};
