"use strict"

module.exports = {
    mid1,
    mid2,
    mid3
}

function mid1 (req, res, next) {
    console.log('hello GET mid1')
    next();
}

function mid2 (req, res, next) {
    console.log('hello GET mid2')
    next();
}

function mid3 (req, res, next) {
    res.json({text: 'mid 3'})
    next();
}
