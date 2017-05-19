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
    $scope.getTamago = getTamago;
    $scope.updateState = updateState;
    $scope.feed = feed;

    function changePanel(panel) {
        $scope.panel = panel;
    }

    function updateState(){
        $scope.state = $scope.tamago.hunger >= 50?'Happy' : 'Normal';
    }

    function feed(item){
        $scope.tamago.hunger +=  item.hunger;
        updateState();
        if($scope.tamago.hunger >= 100){
            $scope.tamago.hunger = 100;
        }
        tamagos.update($scope.tamago);
    }

    function getTamago () {
        $scope.loader = true;
        tamagos.get().then(function (response) {
            $scope.tamago = response.data;
            $scope.loader = false;
            $scope.updateState();
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
    $scope.getTamago();
}
