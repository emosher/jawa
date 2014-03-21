"use strict";

// Declare app level module which depends on ngRoute and controllers
angular.module("routingApp", [ "ngRoute", "routingApp.controllers", "routingApp.services" ]).
    config(function($routeProvider){
        $routeProvider.when("/list", {
            templateUrl: "partials/list.html",
            controller: "ListController"
        }).
        when("/:index", {
            templateUrl: "partials/detail.html",
            controller: "DetailController"
        }).
        otherwise({
            redirectTo: "/list"
        });
    });