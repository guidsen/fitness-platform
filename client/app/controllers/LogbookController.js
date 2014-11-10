var fitnessApp = angular.module('fitnessApp')

fitnessApp.controller('LogbookController', function ($scope) {

    $scope.test = 'Test $scope';
    console.log($scope.test);

})