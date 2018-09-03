const express = require('express');
const moment = require('moment');
const routes = require('./routes');
const getFile = require('./utils/getFile');
const parseFile = require('./utils/parseFile');

const app = express();
const release_date = moment().day(3).format('L');
const url = `https://www.previewsworld.com/NewReleases/Export?format=csv&releaseDate=${release_date}`;

app.use('/', routes);

function init() {
    const parsedFile = getFile(url)
        .then(parseFile)
        .then((parsedFile) => {
            console.log(JSON.stringify(parsedFile));
        })
        .catch((err) => {
            console.log(err);
    });
};

init();

module.exports = app;
