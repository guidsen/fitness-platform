var fitnessApp = angular.module('fitnessApp')

fitnessApp.controller('LocationController', function ($scope) {

    $scope.location = {
        name: "Fit4Free Zoetermeer",
        position: {
            x: 5,
            y: 2
        },
        address: "Eikendreef 10, 2631 JG Nootdorp"
    }

    $scope.members = [
        {
            id: 1,
            firstName: "Liam"
        }, {
            id: 2,
            firstName: "Guido"
        }, {
            id: 3,
            firstName: "Steve"
        }, {
            id: 4,
            firstName: "Dan"
        }, {
            id: 5,
            firstName: "Frank"
        }, {
            id: 6,
            firstName: "Barrack"
        }, {
            id: 7,
            firstName: "Geert"
        }, {
            id: 8,
            firstName: "Marco"
        }
    ];
})