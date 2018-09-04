const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const moment = require('moment');

const routes = require('./routes');
const getFile = require('./utils/getFile');
const parseFile = require('./utils/parseFile');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);

/*
    Pull CSV of latest releases and parse into a json string.
    TODO: Move this to it's own route so it can be called and pass data to the DB.
 */
const release_date = moment().day(3).format('L');
const url = `https://www.previewsworld.com/NewReleases/Export?format=csv&releaseDate=${release_date}`;

getFile(url)
    .then(parseFile)
    .then((parsedFile) => {
        console.log(JSON.stringify(parsedFile));
    })
    .catch((err) => {
        console.log(err);
    });

module.exports = app;
