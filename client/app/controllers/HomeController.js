var fitnessApp = angular.module('fitnessApp')

fitnessApp.controller('HomeController', function ($scope) {

    $scope.test = 'Test $scope';
    console.log($scope.test);

})