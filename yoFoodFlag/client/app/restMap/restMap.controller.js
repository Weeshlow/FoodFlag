'use strict';

angular.module('yoFoodFlagApp')
    .controller('RestMapCtrl', function ($scope, $firebaseArray, $geolocation, toaster) {

        $scope.$geolocation = $geolocation;

        $scope.myPosition = {
            coords: {
                latitude: 33.6751382,
                longitude: -117.8817493
            },
            timestamp: 1430341558245
        };
        $scope.watching = false;

        $geolocation.getCurrentPosition({
            timeout: 60000
        }).then(function (position) {
            toaster.pop('success', "Retrieved GPS location, lat=" + position.coords.latitude +
                ", long=" + position.coords.longitude);
            /*$scope.myPosition = position;*/
            $scope.timestamp = (new Date(parseInt(position.timestamp))).toLocaleString();
        }).catch(function (error) {
            toaster.pop('error', "GPS read failed, error=", error.error.message);
            console.log("myCtrl: error=", error);
        });

        $scope.watchOn = function () {
            console.log("watchOn");
            $geolocation.watchPosition({
                timeout: 60000,
                maximumAge: 250,
                enableHighAccuracy: true
            });
            console.log("watchOn: geoposition=", $geolocation.position);
            $scope.timestamp = (new Date(parseInt($geolocation.position.timestamp))).toLocaleString();
            $scope.watching = true;
        };

        $scope.watchOff = function () {
            console.log("watchOff");
            $geolocation.clearWatch();
            $scope.watching = false;
        };

    });
