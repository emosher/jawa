'use strict';

/* Controllers */

angular.module('controllerApp.controllers', []).
    controller('FossController', function($scope){
        $scope.fossProjects = [
            "Gitlab",
            "AngularJS",
            "Twitter Bootstrap",
            "Grunt",
            "Bower",
            "Yeoman",
            "Backbone",
            "Ember"
        ];
    });