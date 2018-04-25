module.exports = function(sails) {

    var command = require('./lib/command.js');
    var install = require('./lib/install.js');

    return {
        command: command,
        install: install
    };
};
