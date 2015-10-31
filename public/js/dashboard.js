angular.module('angularApp').controller('DashboardController', ['$scope', '$http', '$location','webservice','$q', function ($scope, $http, $location,webservice,$q) {

    console.log("In Dashboard");
    $scope.name="Prannoy";
    var requestFinished = $q.defer();
    var prom = webservice.getApiData();
        prom.then(
            function (payload) {
                $scope.listingData = payload.data;
                requestFinished.resolve();
            },
            function (errorPayload) {
                $log.error('failure loading movie', errorPayload);
                requestFinished.resolve();
            });

    requestFinished.promise.then(function() {
        console.log($scope.listingData);
    });

} ]);
