'use strict';

/* NavbarController */

function NavbarController($scope, $location) {

  $scope.routeIs = function(routeName) {
    return $location.path() === routeName;
  };

}

var mypakadooApp =  mypakadooApp.controller('NavbarController', NavbarController);
