(function () {

    var app = angular.module('AngularApp');

    app.controller('UserController',
        ['$scope', 'github', '$routeParams',
            function ($scope, github, $routeParams) {

                $scope.isBusy = true;
                $scope.error = '';

                github.getUser($routeParams.username)
                    .then(function (response) {
                        $scope.user = response;
                        github.getRepos($scope.user)
                            .then(function (response) {
                                $scope.user.repos = response;
                            }, function (reason) {
                                $scope.error = reason;
                            })
                        $scope.isBusy = false;
                    }, function (reason) {
                        $scope.error = reason;
                        $scope.isBusy = false;
                    });

            }]);

} ());