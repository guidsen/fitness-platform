var fitnessApp = angular.module('fitnessApp')

fitnessApp.controller('ProfileController', function ($scope) {

    $scope.test = 'Test $scope';
    console.log($scope.test);

})