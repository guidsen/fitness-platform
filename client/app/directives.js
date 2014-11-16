var fitnessApp = angular.module('fitnessApp');

fitnessApp.directive('likeable', function ($interval) {
    return {
        restrict: 'A',
        scope: '=',
        link: function (scope, elem, attr) {
            elem.on('dblclick', function (e) {
                scope.$apply(function() {
                    scope.workout.likes += 1;
                })

                elem.find('.workout-like').addClass("liked");

                setTimeout(function () {
                    elem.find('.workout-like').removeClass("liked");
                }, 150);
            })
        }
    }
})