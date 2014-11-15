var fitnessApp = angular.module('fitnessApp');

fitnessApp.directive('workoutCard', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: true,
        templateUrl: '/views/components/workout-card.html',
        transclude: true
    }
})