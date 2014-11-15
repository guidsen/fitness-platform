var fitnessApp = angular.module('fitnessApp');

fitnessApp.directive('likeable', function ($interval) {
    return {
        restrict: 'A',
        link: function (scope, elem, attr) {
            console.log(elem);

            elem.on('dblclick', function (e) {
                elem.find('.workout-like').addClass("liked");

                var func = function () {
                    elem.find('.workout-like').removeClass("liked");
                };

                setTimeout(func, 150);
            })
        }
    }
})