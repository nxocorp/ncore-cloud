angular.module('app', []);
angular.module('app').controller('mainCtrl', function($scope) {
    
    //$scope.test = "AngularJS Is Running!";
    $scope.projects = [{
        title: 'CODECANVAS',
        description: 'Dynamic Semantic Programming Language'
    }, {
        title: 'GRIDSPACE',
        description: 'Modular Mobile Device Framework'
    }];
    
});