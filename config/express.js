"use strict";

module.exports = {
    initExpress
}

const bodyParser = require('body-parser');
const methodOverride = require('method-override');

function initExpress(app) {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    app.use(function (req, res, next) {
        console.log('general midd', req.url, req.body);
        req.resources = req.resources || {};
        next();
    })
}
