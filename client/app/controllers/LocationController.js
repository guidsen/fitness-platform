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
            firstname: "Liam"
        }, {
            id: 2,
            firstname: "Guido"
        }, {
            id: 3,
            firstname: "Steve"
        }, {
            id: 4,
            firstname: "Dan"
        }, {
            id: 5,
            firstname: "Frank"
        }, {
            id: 6,
            firstname: "Barrack"
        }, {
            id: 7,
            firstname: "Geert"
        }, {
            id: 8,
            firstname: "Marco"
        }
    ];

    console.log($scope.members);

})