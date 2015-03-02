var request = require('request');
var q = require('q');

exports.xhrReq = function xhrReq(options) {
	var deferred = q.defer();
	request(options, function(error, response, body) {
		if (!error) {
			deferred.resolve(response);
		} else {
			console.log(error);
			deferred.reject(error);
		}
	});
	return deferred.promise;
};