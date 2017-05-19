/**
 * Created by hamid on 16/05/17.
 */

app.controller('MainController', ['$scope', 'tamagos', 'rankings', MainController]);

function MainController($scope, tamagos, rankings) {

    //functions
    $scope.createTamago = createTamago;
    $scope.getTamagos = getTamagos;
    $scope.changePanelX = changePanelX;
    $scope.changePanelY = changePanelY;
    $scope.connect = connect;
    $scope.disconnect = disconnect;
    $scope.init = init;
    $scope.getRankings = getRankings;

    //init
    $scope.init();

    function init() {
        //variables
        $scope.panelX = 0;
        $scope.panelY = 0;
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

    function changePanelX(panelX) {
        $scope.panelX = panelX;
    }

    function changePanelY(panelY) {
        $scope.panelY = panelY;
    }

    function connect() {
        $scope.connected = 1;
    }

    function disconnect() {
        $scope.connected = 0;
    }
}
