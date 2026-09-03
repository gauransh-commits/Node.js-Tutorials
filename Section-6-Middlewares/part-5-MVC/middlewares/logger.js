const fs = require('node:fs');

exports.loggerMiddleware = (function (req,res,next) {  // this adds a property named loggerMiddleware to the existing exports object.
    const log = `\n[${Date.now()}] ${req.method} ${req.path}`;
    fs.appendFileSync('logs.txt', log,'utf-8');
    next();
})

// we use exports.loggerMiddleware when we want to export multiple items (functions, constants, objects) from a single file as properties of an object, rather than exporting just one single thing.