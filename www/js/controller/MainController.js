/**
 * Created by hamid on 16/05/17.
 */

app.controller('MainController', ['$scope', MainController]);


function MainController($scope) {
    $scope.panel = 0;
    $scope.connected = 0;

    $scope.changePanel = function (panel) {
        $scope.panel = panel;
    }

    $scope.connect = function () {
        $scope.connected = 1;
    }

    $scope.disconnect = function () {
        $scope.connected = 0;
    }
}
