/**
 * Created by hamid on 16/05/17.
 */

app.controller('HomeController', ['$scope', HomeController]);


function HomeController($scope) {
    $scope.panel = 0;

    $scope.changePanel = function (panel) {
        $scope.panel = panel;
    }
}
