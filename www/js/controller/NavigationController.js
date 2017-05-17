/**
 * Created by hamid on 16/05/17.
 */

app.controller('NavigationController', ['$scope', NavigationController]);


function NavigationController($scope) {
    $scope.menu = 'main';

    $scope.changeMenu = function (menu) {
        $scope.menu = menu;
    }
}
