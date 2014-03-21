"use strict";

angular.module("markdownApp.services", []).

    // The FossProjects service is a wrapper around the JSON data.
    service("FossProjects", function($http) {

        var promise;

        var getAll = function() {

            if (!promise) {
                // Get the JSON data.
                promise = $http.get("json/projects.json", { cache: true }).then(function(response) {
                    // Request suceeded, set our variable
                    return response.data;
                });    
            }
            return promise;
        };

        return {
            getAll: getAll
        };

    }).

    // The Markdown service does an HTTP request to retrieve the markdown document specified by the URL.
    service("Markdown", function($http) {

        var retrieve = function(filePath) {
            // Get the Markdown data.
            var promise = $http.get(filePath, { cache: true }).then(function(response) {
                // Request suceeded, set our variable
                return response.data;
            });    
            return promise;
        };

        return {
            retrieve: retrieve
        };
    });
