var xhrReq = require('./xhrReq');
var q = require('q');

exports.request = function(tokenUrl, requestUrl, username, password) {
	var deferred = q.defer();
	var options = {
		method: 'POST',
		uri: tokenUrl,
		form: {
			'username':username,
			'password':password,
			'f':'json',
			'encrypted':'false'
		}
	};
	xhrReq.xhrReq(options).then(function(data) {
		var dataJson = JSON.parse(data.body);
		if(dataJson.hasOwnProperty('token')) {
			var requestOptions = {
				method: 'POST',
				uri: requestUrl,
				qs: {
					'token': dataJson.token,
					'f': 'json'
				}
			};
			xhrReq.xhrReq(requestOptions).then(function(requestData) {
				var requestDataJson = JSON.parse(requestData.body);
				deferred.resolve(requestDataJson);
			});
		} else {
			deferred.reject('Error getting token.');
		}
	});
	return deferred.promise;
}
