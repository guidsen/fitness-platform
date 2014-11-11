var fitnessApp = angular.module('fitnessApp')

fitnessApp.controller('WorkoutController', function ($scope) {

    $scope.workouts = [{
        created_at: '23 jul',
        exercises: 4,
        sets: 20,
        gym: 'Fit for Free Den Haag',
        muscles_used: ['buikspieren', 'benen', 'kuiten'],
        likes: 2,
        comments: 2
    }, {
        created_at: '21 jul',
        exercises: 3,
        sets: 9,
        gym: 'Fit for Free Forepark',
        muscles_used: ['benen', 'rug'],
        likes: 9,
        comments: 5
    }, {
        created_at: '27 aug',
        exercises: 2,
        sets: 14,
        gym: 'Basic Fit Delft',
        muscles_used: ['buikspieren', 'rug'],
        likes: 0,
        comments: 0
    }, {
        created_at: '25 jul',
        exercises: 4,
        sets: 20,
        gym: max('Active Health Center Leidscheveen', 10),
        muscles_used: ['buikspieren', 'borst', 'rug'],
        likes: 23,
        comments: 4
    }, {
        created_at: '15 jul',
        exercises: 3,
        sets: 15,
        gym: 'Fit4Free Zoetermeer',
        muscles_used: ['borst', 'rug'],
        likes: 3,
        comments: 5
    }];
    console.log($scope.test);

})