var fitnessApp = angular.module('fitnessApp')

fitnessApp.controller('LocationController', function ($scope) {

    $scope.location = {
        name: "Fit4Free Zoetermeer",
        position: {
            x: 5,
            y: 2
        }
    }

    $scope.members = [
        {
            id: 1,
            name: "Liam Hubers"
        }, {
            id: 2,
            name: "Guido Schmitz"
        }, {
            id: 3,
            name: "Steve de Waal"
        }, {
            id: 4,
            name: "Dan Bilzerian"
        }, {
            id: 5,
            name: "Frank de Boer"
        }, {
            id: 6,
            name: "Barrack Obama"
        }, {
            id: 7,
            name: "Geert Wilders"
        }, {
            id: 8,
            name: "Marco Borsato"
        }
    ];

    console.log($scope.members);

})