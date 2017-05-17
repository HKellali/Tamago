/**
 * Created by hamid on 16/05/17.
 */

app.controller('MainController', ['$scope', MainController]);


function MainController($scope) {
    $scope.panel = 0;

    $scope.changePanel = function (panel) {
        $scope.panel = panel;
    }
}
