var app = angular.module('myApp', []);

app.constant('Constants', {
    BASE_URL: 'http://konnectapiqa.azurewebsites.net/'
});

app.service('SyncService', function ($http, Constants) {
	var baseUrl = Constants.BASE_URL;

	this.appData = function (appInfo) {
    	return $http.post(baseUrl + 'api/SyncService/Sync', appInfo).then(function(result) {
    		return result;
    	});
	}
});

app.controller('MyCtrl', ['$scope','SyncService', function($scope, sync) {
    $scope.appInfo = {AppName : ''};
    $scope.loading = false;
    $scope.showData = false;

    
    $scope.getAppData = function() {
        $scope.loading = true;
    	sync.appData($scope.appInfo).then(function (result) {
            $scope.loading = false;
    		$scope.appData = result.data;
            $scope.showData = true;
    	});
    }
}]);