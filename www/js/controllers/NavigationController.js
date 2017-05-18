/**
 * Created by hamid on 16/05/17.
 */

app.controller('NavigationController', ['$scope', '$location', NavigationController]);


function NavigationController($scope, $location) {
    $scope.menu = ($location.$$path).slice(1, ($location.$$path).length);
    $scope.changeMenu = function (menu) {

        $scope.menu = menu;
    }
}
