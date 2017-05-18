/**
 * Created by hamid on 16/05/17.
 */

app.controller('HomeController', ['$scope', 'items', 'tamagos', HomeController]);


function HomeController($scope, items, tamagos) {
    $scope.panel = 0;
    $scope.name = '';
    $scope.item = {};
    $scope.loader = false;
    $scope.createItem = createItem;
    $scope.getItems = getItems;
    $scope.changePanel = changePanel;
    $scope.getTamagos = getTamagos;

    function changePanel(panel) {
        $scope.panel = panel;
    }

    function getTamagos () {
        $scope.loader = true;
        tamagos.get().then(function (response) {
            $scope.tamagos = response.data;
            $scope.loader = false;
        });
    }

    function getItems() {
        $scope.loader = true;
        items.get().then(function (response) {
            $scope.items = response.data;
            $scope.loader = false;
        });
    }

    function createItem() {
        $scope.item.name = $scope.name;
        items.save($scope.item);
        $scope.getItems();
    }

    $scope.getTamagos();
}
