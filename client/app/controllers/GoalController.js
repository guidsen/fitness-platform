var fitnessApp = angular.module('fitnessApp')

fitnessApp.controller('GoalController', function ($scope) {

    $scope.test = 'Test $scope';
    console.log($scope.test);

})