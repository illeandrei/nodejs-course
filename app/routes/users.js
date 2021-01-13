"user strict"

const express = require("express");
const router = express.Router();
const authorizationCtrl = require('../controllers/authorization');
const userCtrl = require('../controllers/users');

router.get('/users',
    authorizationCtrl.checkAdmin,
    userCtrl.mid2,
    userCtrl.mid3
);

router.post('/users',
    authorizationCtrl.checkAdmin,
    function (req, res, next) {
        res.json({text: 'hello  POST'});
    }
)

router.put('/users',
    authorizationCtrl.checkAdmin,
    function (req, res, next) {
        console.log("users route PUT");
        res.json({text: 'hello PUT'})
    }
)

module.exports = router;
