//declare a module
var app = angular.module('myApp', []);

//declare a controller
app.controller('MyCtrl', ['$scope', function($scope) {
   $scope.kingsGuard = "Jamie";
   $scope.house= "Lannister";

   $scope.alertInfo = function() {
     alert($scope.kingsGuard);
   };
}]);