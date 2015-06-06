/**
 * Created by daniel.neumann on 6/6/15.
 */
var tinyVerseApp = angular.module('tinyVerseApp', []);

tinyVerseApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");


    var refresh = function () {
        $http.get('/tinyverses').success(function (response) {
            console.log("I got the data I requested");
            $scope.tinylist = response;
            $scope.tiny = "";
        });
    };
    refresh();

    $scope.deselect = function() {
        $scope.tiny = "";
    };

    $scope.addTiny = function() {
        console.log($scope.tiny);
        $http.post('/tinyverses', $scope.tiny).success(function (response) {
            console.log(response);
            refresh();
        });
    };

    $scope.remove = function(id) {
        console.log(id);
        $http.delete('/tinyverses/' + id).success(function(response) {
            refresh();
        });
    };

    $scope.edit = function(id) {
        console.log('Editing ' + id);
        $http.get('/tinyverses/' + id).success(function(response) {
            $scope.tiny = response;
        });
    };


     $scope.update = function() {
    console.log('Update function: ' + $scope.tiny._id);
    $http.put('/tinyverses/' + $scope.tiny._id, $scope.tiny).success(function(response) {
       refresh();
    });

    };


}]);