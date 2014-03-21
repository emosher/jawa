"use strict";

angular.module("markdownApp.controllers", []).

    // The FossController gets data from the server and provides it to our scope. 
    controller("ListController", function($scope, FossProjects){

        FossProjects.getAll().then(function(data) {
            $scope.fossProjects = data;
        });

    }).

    // DetailController loads the details of the current url
    controller("DetailController", function($scope, $routeParams, FossProjects, Markdown){
        var name = $routeParams.name;

        // Find the correct object, by the "name" property within an array of objects
        var findByName = function(objArray, name) {
            var retObj = {};
            for (var index = 0; index < objArray.length; index++) {
                if (objArray[index]["name"] === name) {
                    retObj = objArray[index];
                    break;
                }
            }
            return retObj;
        };

        $scope.markdown = "";

        // HTTP GET request to get the FOSS projects data
        FossProjects.getAll().then(function(data) {
            $scope.project = findByName(data, name);
        });

        // HTTP GET to retrieve the Markdown document
        Markdown.retrieve("markdown/" + name + ".md").then(function(data) {
            $scope.markdown = data;
        });

    });