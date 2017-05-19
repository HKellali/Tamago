/**
 * Created by hamid on 16/05/17.
 */

app.controller('MainController', ['$scope', 'tamagos', 'rankings', MainController]);

function MainController($scope, tamagos, rankings) {

    //functions
    $scope.createTamago = createTamago;
    $scope.getTamagos = getTamagos;
    $scope.changePanel = changePanel;
    $scope.connect = connect;
    $scope.disconnect = disconnect;
    $scope.init = init;
    $scope.getRankings = getRankings;

    //init
    $scope.init();

    function init() {
        //variables
        $scope.panel = 0;
        $scope.connected = 1;
        $scope.name = '';

        //functions
        $scope.getTamagos();
        $scope.getRankings();
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

    function getRankings() {
        rankings.get().then(function (response) {
            $scope.rankings = response.data;
        });
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
