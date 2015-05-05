(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
blocChat = angular.module('BlocChat', ['ui.router','firebase','ui.bootstrap','angular-loading-bar']);

blocChat.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
   $locationProvider.html5Mode(true);
 
   $stateProvider.state('landing', {
     url: '/',
     controller: 'Landing.controller',
     templateUrl: '/templates/landing.html'
   });

}]);

blocChat.controller('Landing.controller', ["$scope", function($scope) {

   $scope.subText = "Turn the music up!";
   $scope.mainText = "Bloc Jams";

}]);


/*  

// define our app and dependencies (remember to include firebase!)

var app = angular.module("sampleApp", ["firebase"]);

// inject $firebaseAuth into our controller

app.controller("SampleCtrl", ["$scope", "$firebaseAuth",
  function($scope, $firebaseAuth) {
    var ref = new Firebase("https://<your-firebase>.firebaseio.com/");
    var auth = $firebaseAuth(ref);
  }
]);

}]);

*/
},{}]},{},[1]);