// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('scanner', [
  'ionic',
  'ngCordova',
  'scanner.controllers','scanner.services'
])


.run(function($rootScope, $ionicPlatform, $cordovaStatusbar) {

  $ionicPlatform.ready(function() {

    // Hide the accessory bar by default
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }

    // Color the iOS status bar text to white
    if (window.StatusBar) {
      $cordovaStatusbar.overlaysWebView(true);
      $cordovaStatusBar.style(1); //Light
    }

    // Default update checking
    $rootScope.updateOptions = {
      interval: 2 * 60 * 1000
    };


/*
    cordova.plugins.diagnostic.requestCameraAuthorization(function(status){
    console.log("Authorization status for camera is " + status);
}, function(error){
    console.error(error);
});*/




  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html",
    controller: 'HomeController as vm'

  })

  // Each tab has its own nav history stack:

  // Welcome tab
  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html'
      }
    }
  })

  .state('tab.aqhp', {
    url: '/aqhp',
    views: {
      'tab-aqhp': {
        templateUrl: 'templates/tab-aqhp.html'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
