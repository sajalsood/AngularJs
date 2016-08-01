var app = angular.module('myApp', []);

app.constant('Game', {
    message: 'Winter is coming'
});

app.controller('MyCtrl', ['$scope', 'Game', function($scope, game) {
    
    $scope.showMembers = false; $scope.query = ''; $scope.member = ''; $scope.message = game.message;
    $scope.houses= [
    	{
    		name : "Stark", sigil : "DireWolf", place: "Winterfell", 
    		members: ['Eddard', 'Cateyln', 'Rob', 'Jon', 'Sansa', 'Arya']
    	},
    	{
    		name : "Lannister", sigil : "Lion", place: "King's Landing", 
    		members: ['Tyrion','Cersie', 'Jamie', 'Joffery']
    	},
    	{
    		name: "Targeryen", sigil: "Dragons", place: "Dragonstone", 
    		members:['Aerys II', 'Rhaegar', 'Daenerys']
    	}
    ];

    $scope.getMembers = function(house){
    	$scope.showMembers = true;
    	$scope.house = house;
    };

    $scope.removeMember = function(index){
    	if(index >= 0 ){ $scope.house.members.splice(index, 1); }
    };

    $scope.addNewMember = function(mem) {
    	if(mem != '') { $scope.house.members.push(mem); }
    };
}]);