// define the new notification type
module.exports = function(){

	var type = {
		name: 'spotify-playmusic',
		service: 'spotify-playmusic'
	};

	return gladys.notification.install(type);
};
