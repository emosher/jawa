"use strict";

// Declare app level module which depends on ngRoute and controllers
angular.module("markdownApp", [ "ngRoute", "markdownApp.controllers", "markdownApp.services", "btford.markdown" ]).
    config(function($routeProvider){
        $routeProvider.when("/list", {
            templateUrl: "partials/list.html",
            controller: "ListController"
        }).
        when("/:name", {
            templateUrl: "partials/detail.html",
            controller: "DetailController"
        }).
        otherwise({
            redirectTo: "/list"
        });
    });