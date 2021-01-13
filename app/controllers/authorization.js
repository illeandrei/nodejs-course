"use strict"

module.exports = {
    checkAdmin
}

const isAdmin = true;

function checkAdmin (req, res, next) {
    console.log({isAdmin})
    if (isAdmin) {
        return next();
    }
    res.send('not authorized')
}
