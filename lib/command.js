const Promise = require('bluebird')
module.exports = function(notification){
  gladys.music.playPlaylist(notification['replacedText']);
  return Promise.resolve(notification);
};
