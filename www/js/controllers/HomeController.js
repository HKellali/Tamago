/**
 * Created by hamid on 16/05/17.
 */

app.controller('HomeController', ['$scope', 'items', HomeController]);


function HomeController($scope, items) {
    $scope.panel = 0;
    $scope.name = '';
    $scope.item = {};
    $scope.createItem = createItem;
    $scope.getItems = getItems;
    $scope.changePanel = changePanel;
    $scope.loader = true;

    function changePanel(panel) {
        $scope.panel = panel;
    }

    function getItems() {
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

    console.log($scope.items);

    // $scope.getItems();
}
