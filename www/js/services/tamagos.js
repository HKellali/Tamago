app.factory('tamagos', ['$http', function ($http) {
    var baseUrl = 'https://tamago.niamor.com/api/tamago';
    var id = 1;
    var url = baseUrl + '/';
    var promise;
    return {
        get: function () {
            if (!promise) {
                promise = $http.get(url + id)
                    .then(function (response) {
                        return response;
                    });
            }
            return promise;
        },
        save: function (data) {
            promise = $http.post(url, {
                    name: data.name
                }
            ).then(function (response) {
                console.log(response);
                return response;
            });
            return promise;
        },
        update: function (data) {
            promise = $http.put(url + data.id, data
            ).then(function (response) {
                console.log(response);
                return response;
            });
            return promise;
        }
    };
}]);