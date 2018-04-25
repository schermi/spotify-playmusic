const Promise = require('bluebird')
module.exports = function(notification){
  console.log(notification.replacedText);
  return true;
};
