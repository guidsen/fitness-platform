var fitnessApp = angular.module('fitnessApp')

fitnessApp.controller('WorkoutController', function ($scope) {

    $scope.test = 'Test $scope';
    console.log($scope.test);

})