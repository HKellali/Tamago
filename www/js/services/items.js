app.factory('items', ['$http', function ($http) {
    var url = 'https://tamago.niamor.com/api/item';
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
                    name: data.name,
                    type: data.type,
                    hunger: data.hunger,
                    health: data.health,
                    energy: data.energy,
                    mood: data.mood
                }
            ).then(function (response) {
                console.log(response);
                return response;
            });
        }
    };
}]);