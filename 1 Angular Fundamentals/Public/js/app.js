(function () {

    var app = angular.module('AngularApp', ['ngRoute']);

    app.config(function($routeProvider){
        $routeProvider
        .when('/main',{
            templateUrl:'Views/main.html',
            controller:'MainController'
        })
        .when('/user/:username',{
            templateUrl:'Views/user.html',
            controller:'UserController'
        })
        .when('/user/:username/:repo',{
            templateUrl:'Views/repo.html',
            controller:'RepoController'
        })
        .otherwise({
            redirectTo:'/main'
        });
    });

} ());
