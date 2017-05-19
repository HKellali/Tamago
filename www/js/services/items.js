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
            console.log(data);
            $http.post(url, {
                    activities: data.activities,
                    name: data.name,
                    type: data.type,
                    hunger: data.hunger,
                    health: data.health,
                    mood: data.mood,
                    energy: data.energy
                }
            ).then(function (response) {
                console.log(response);
                return response;
            });
        }
    };
}]);