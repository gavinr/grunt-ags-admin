exports.getTokenUrl = function(baseUrl) {
	return baseUrl + 'tokens/generateToken';
};

exports.getStartUrl = function(baseUrl, servicePath) {
	var adminUrl = baseUrl + 'admin/';
	return adminUrl + 'services/' + servicePath + '/start';
};

exports.getStopUrl = function(baseUrl, servicePath) {
	var adminUrl = baseUrl + 'admin/';
	return adminUrl + 'services/' + servicePath + '/stop';
};

