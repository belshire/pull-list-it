const routes = require('express').Router();
const publishers = require('./publishers');
const comics = require('./comics');

routes.use('/publisher', publishers);

routes.get('/', (req, res) => {
    res.status(200).json({message: "Connected!"});
});

module.exports = routes;
