/**
 * Created by hamid on 16/05/17.
 */

app.controller('MainController', ['$scope', 'tamagos', MainController]);


function MainController($scope, tamagos) {

    //functions
    $scope.createTamago = createTamago;
    $scope.getTamagos = getTamagos;
    $scope.changePanel = changePanel;
    $scope.connect = connect;
    $scope.disconnect = disconnect;
    $scope.init = init;

    //init
    $scope.init();

    function init() {
        //variables
        $scope.panel = 0;
        $scope.connected = 1;
        $scope.name = '';

        //functions
        $scope.getTamagos();
    }

    function getTamagos() {
        tamagos.get().then(function (response) {
            $scope.tamagos = response.data;
        });
    }

    function createTamago() {
        $scope.tamago = {
            name: $scope.name
        };
        tamagos.save($scope.tamago);
        $scope.getTamagos();
    }

    function changePanel(panel) {
        $scope.panel = panel;
    }

    function connect() {
        $scope.connected = 1;
    }

    function disconnect() {
        $scope.connected = 0;
    }
}
