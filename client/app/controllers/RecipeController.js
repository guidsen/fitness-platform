var fitnessApp = angular.module('fitnessApp')

fitnessApp.controller('RecipeController', function ($scope) {

    $scope.test = 'Test $scope';
    console.log($scope.test);

})