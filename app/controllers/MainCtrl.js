KittyApp.controller('MainCtrl', function($scope, $location){
	$scope.onContactPage = function() {
		return $location.path() === '/contact';
	}

	$scope.isActive = function(viewLocation) {
		return $location.path().substring(0, 5) === viewLocation.substring(0,5);
	}
});