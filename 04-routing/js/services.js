"use strict";

angular.module("routingApp.services", []).

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

    });
