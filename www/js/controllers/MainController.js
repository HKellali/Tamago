/**
 * Created by hamid on 16/05/17.
 */

app.controller('MainController', ['$scope', 'tamagos', MainController]);


function MainController($scope, tamagos) {
    $scope.panel = 0;
    $scope.connected = 1;
    $scope.name = '';
    $scope.tamago = {};

    function getTamagos () {
        tamagos.get().then(function (response) {
            $scope.tamagos = response.data;
        });
    }

    function createTamago() {
        $scope.tamago.name = $scope.name;
        tamagos.save($scope.tamago);
        $scope.getTamagos();
    }

    $scope.createTamago = createTamago;
    $scope.getTamagos = getTamagos;

    $scope.changePanel = function (panel) {
        $scope.panel = panel;
    };

    $scope.connect = function () {
        $scope.connected = 1;
    };

    $scope.disconnect = function () {
        $scope.connected = 0;
    };

    $scope.getTamagos();
}
