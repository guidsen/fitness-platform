var fitnessApp = angular.module('fitnessApp', ['ui.router']);

fitnessApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        .state('goals', {
            url: '/doelen',
            templateUrl: 'views/goals.html',
            controller: 'GoalController'
        })
        .state('workouts', {
            url: '/workouts',
            templateUrl: 'views/workouts.html',
            controller: 'WorkoutController'
        })
        .state('recipes', {
            url: '/recepten',
            templateUrl: 'views/recepten.html',
            controller: 'RecipeController'
        })
        .state('logbook', {
            url: '/logboek',
            templateUrl: 'views/logboek.html',
            controller: 'LogbookController'
        })
})