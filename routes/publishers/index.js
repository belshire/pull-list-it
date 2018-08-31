const publishers = require('express').Router();
const all = require('./all');
const single = require('./single');
const findObject = require('../../utils/findObject');

publishers.get('/', all);
publishers.get('/:publisherId', single);

publishers.param('publisherId', findObject('publisher'));

module.exports = publishers;