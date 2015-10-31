// MODULE
var angularApp = angular.module('angularApp', ['ngRoute']);



    angularApp.service('webservice',function($http)
    {
        var self=this;
        this.getApiData=function()
        {
           return  $http.jsonp("http://gateway.marvel.com/v1/public/comics?apikey=7c2ea1955f73606dbc9443ac7507c3bf&&callback=JSON_CALLBACK&&limit=100");

        }

    });



angularApp.config(function($routeProvider)
{

    $routeProvider.
        when('/signup', {
            templateUrl: 'partials/signup.html',
            controller: 'SignupController'
        }).
        when('/', {
            templateUrl: 'partials/dashboard.html',
            controller: 'DashboardController'
        })

});








