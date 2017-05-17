document.addEventListener('deviceready', function () {
    // window.plugins.playGamesServices.auth();
}, false);

var app = angular.module('Tamago', ['ngRoute']);

app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    "use strict";
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html'
        })
        .when('/about', {
            templateUrl: 'views/about.html'
        })
        .when('/main', {
            templateUrl: 'views/main.html'
        })
        .when('/connection', {
            templateUrl: 'views/connection.html'
        })
        .when('/character', {
            templateUrl: 'views/character.html'
        })
        .when('/creation', {
            templateUrl: 'views/creation.html'
        })
        .otherwise({
            redirectTo: '/main'
        });
}]);
