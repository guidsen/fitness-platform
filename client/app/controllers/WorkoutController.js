var fitnessApp = angular.module('fitnessApp')

fitnessApp.controller('WorkoutController', function ($scope) {

    $scope.workouts = [{
        id: 1,
        created_at: '23 jul',
        exercises: 4,
        sets: 20,
        gym: max('Fit for Free Den Haag'),
        muscles_used: ['buikspieren', 'benen', 'kuiten'],
        likes: 2,
        comments: 2
    }, {
        id: 2,
        created_at: '21 jul',
        exercises: 3,
        sets: 9,
        gym: max('Fit for Free Forepark'),
        muscles_used: ['benen', 'rug'],
        likes: 9,
        comments: 5
    }, {
        id: 3,
        created_at: '27 aug',
        exercises: 2,
        sets: 14,
        gym: max('Basic Fit Delft'),
        muscles_used: ['buikspieren', 'rug'],
        likes: 0,
        comments: 0
    }, {
        id: 4,
        created_at: '25 jul',
        exercises: 4,
        sets: 20,
        gym: max('Active Health Center Leidscheveen'),
        muscles_used: ['buikspieren', 'borst', 'rug'],
        likes: 23,
        comments: 4
    }, {
        id: 5,
        created_at: '15 jul',
        exercises: 3,
        sets: 15,
        gym: max('Fit4Free Zoetermeer'),
        muscles_used: ['borst', 'rug'],
        likes: 3,
        comments: 5
    }];

    $scope.workout = {
        created_at: '15 jul',
        rest_between_sets: 30,
        exercises: [{
            title: 'Bench Press',
            tags: ['borst', 'kracht', 'stang'],
            img_before: 'http://www.bodybuilding.com/exercises/exerciseImages/sequences/369/Male/m/369_1.jpg',
            img_after: 'http://www.bodybuilding.com/exercises/exerciseImages/sequences/369/Male/m/369_2.jpg',
            sets: [
                {
                    weight: 12,
                    reps: 10
                },
                {
                    weight: 16,
                    reps: 10
                },
                {
                    weight: 18,
                    reps: 8
                },
                {
                    weight: 22,
                    reps: 6
                }
            ]
        },
            {
                title: 'Hanging leg raise',
                tags: ['buik', 'kracht', 'lichaam', 'isolatie'],
                img_before: 'http://www.bodybuilding.com/exercises/exerciseImages/sequences/222/Male/m/222_1.jpg',
                img_after: 'http://www.bodybuilding.com/exercises/exerciseImages/sequences/222/Male/m/222_2.jpg',
                sets: [
                    {
                        weight: null,
                        reps: 15
                    },
                    {
                        weight: null,
                        reps: 15
                    },
                    {
                        weight: null,
                        reps: 15
                    },
                    {
                        weight: null,
                        reps: 15
                    }
                ]
            }]
    }

})