"use strict";

module.exports = {
    initRoutes
}

const path = require('path');
const fs = require('fs');

function initRoutes(app) {
    const routesPath = path.join(__dirname, '../app/routes');

    fs.readdir(routesPath, (err, files) => {
        files.forEach(route => {
            const finalPath = `${routesPath}/${route}`;
            console.log({route, finalPath});
            app.use(require(finalPath))
        });
    });
}
