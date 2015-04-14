angular.module('myapp', []).controller('TodoCtrl', function($scope) {
    $scope.elements = [];
    $scope.inputValue = '';

    $scope.addNew = function() {
        if (!$scope.inputValue) {
            return;
        }
        $scope.elements.push({
            value: $scope.inputValue,
            status: true
        });
        $scope.inputValue = '';
        $scope.updateCounter();
    };
    $scope.remove = function(index) {
    	$scope.elements.splice(index, 1);
    	$scope.updateCounter();
    };

    $scope.updateCounter = function () {
    	$scope.active = 0;
    	$scope.inactive = 0;
    	$scope.elements.forEach(function (val) {
    		if (val.status) {
    			$scope.inactive++;
    		}
    	});
    	$scope.active = $scope.elements.length - $scope.inactive;
    };
    $scope.updateCounter();
});
