app.factory('tamagos', ['$http', function ($http) {
    var url = 'https://tamago.niamor.com/api/tamago';
    return {
        get: function () {
            var promise;
            if (!promise) {
                promise = $http.get(url)
                    .then(function (response) {
                        return response;
                    });
            }
            return promise;
        },
        save: function (data) {
            $http.post(url, {
                    name: data.name
                }
            ).then(function (response) {
                console.log(response);
                return response;
            });
        }
    };
}]);