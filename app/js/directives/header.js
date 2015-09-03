'use strict';

/* header.js */

mypakadooApp.directive('header', function () {
    return {
        replace: true,
        scope: {user: '='},
        templateUrl: "views/partials/header.html",
        controller: ['$scope', '$filter', function ($scope, $filter) {
            // Your behaviour goes here :)
        }]
    }
});