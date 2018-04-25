module.exports = function(sails) {

    var play = require('./lib/play.js');
    var install = require('./lib/install.js');

    return {
        play: play,
        install: install
    };
};
