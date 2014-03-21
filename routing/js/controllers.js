"use strict";

angular.module("routingApp.controllers", []).

    // The FossController gets data from the server and provides it to our scope. 
    controller("ListController", function($scope, FossProjects){

        FossProjects.getAll().then(function(data) {
            $scope.fossProjects = data;
        });

    }).

    // DetailController loads the details of the current url
    controller("DetailController", function($scope, $routeParams, FossProjects){
        
        FossProjects.getAll().then(function(data) {
            $scope.project = data[$routeParams.index];
        });

    });