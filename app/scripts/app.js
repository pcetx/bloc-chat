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