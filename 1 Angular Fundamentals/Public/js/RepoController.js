(function(){

    var app = angular.module('AngularApp');

    app.controller('RepoController',
            ['$scope', 'github', '$routeParams',
            function ($scope, github, $routeParams) {

                $scope.isBusy = true;
                $scope.error = '';

                github.getRepoInfo($routeParams.username,$routeParams.repo)
                    .then(function (response) {
                        $scope.repo = response;
                        console.log($scope.repo);
                        github.getContributors($scope.repo)
                            .then(function (response) {
                                $scope.repo.contributors = response;
                            }, function (reason) {
                                $scope.error = reason;
                            })
                        $scope.isBusy = false;
                    }, function (reason) {
                        $scope.error = reason;
                        $scope.isBusy = false;
                    });

    }]);

}())