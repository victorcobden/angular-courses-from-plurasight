(function () {

    var app = angular.module('AngularApp');

    app.controller('MainController',
    ['$scope','$interval','$location',
    function($scope,$interval,$location){

        var decrementCountDown = function(){
            $scope.countdown -= 1;
            if($scope.countdown<1){
                $scope.search($scope.username);
            }
        }

        var startCountDown = function(){
            countdownInterval = $interval(decrementCountDown,1000,$scope.countdown);
        }

        $scope.search = function(username){
            if(countdownInterval){
                $interval.cancel(countdownInterval);
                $scope.countdown = null;
            }
            $location.path('/user/' + username)
        };

        var countdownInterval = null;

        $scope.countdown = 5;

        $scope.username = '';

        startCountDown();

    }]);

}());