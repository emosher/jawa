'use strict';

/* 
 * The FossController gets data from the server and provides it to our scope. 
 */

angular.module('controllerApp.controllers', []).

    controller('FossController', function($scope, $http){

        // Similar to jQuery's ajax and get functions, there are different ways to use the $http 
        // service. We'll use a shortcut fn here.
        $http.get("json/projects.json").then(function(response) {
            // Request suceeded, set the scope variable.
            $scope.fossProjects = response.data;
        }, function(response){
            // Request failed
            console.error("Request failed with: " + response);
        });

    });