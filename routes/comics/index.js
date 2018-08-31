const comics = require('express').Router();
const all = require('./all');
const single = require('./single');
const findObject = require('../../utils/findObject');

comics.get('/', all);
comics.get('/:comicId', single);

comics.param('comicId', findObject('comic'));
module.exports = comics;