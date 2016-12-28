(function(){

    var github = function($http){

        var getUser = function(username){
            return $http.get('https://api.github.com/users/' + username)
            .then(function(response){
                return response.data;
            });
        };

        var getRepos = function(user){
            return $http.get(user.repos_url)
            .then(function(response){
                return response.data;
            });
        };

        var getRepoInfo = function(username,repo){
            return $http.get('https://api.github.com/repos/' + username + '/' + repo)
            .then(function(response){
                return response.data;
            });
        };

        var getContributors = function(repo){
            return $http.get(repo.contributors_url)
            .then(function(response){
                return response.data;
            });
        };

        return {
            getUser:getUser,
            getRepos:getRepos,
            getRepoInfo:getRepoInfo,
            getContributors:getContributors
        };
    };

    var module = angular.module('AngularApp');
    module.factory('github',github);
}());