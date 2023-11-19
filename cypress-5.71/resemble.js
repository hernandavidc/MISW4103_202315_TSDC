const service = require('./service.js');

console.log(service.filesList("./cypress/screenshots", ["create-page", "create-post"]))