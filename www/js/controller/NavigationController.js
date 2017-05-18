/**
 * Created by hamid on 16/05/17.
 */

app.controller('NavigationController', ['$scope', '$location', NavigationController]);


function NavigationController($scope, $location) {
    $scope.menu = 'main';
    $scope.changeMenu = function (menu) {

        $scope.menu = menu;
        console.log($location);
    }
}
