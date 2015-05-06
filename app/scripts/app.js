blocChat = angular.module('BlocChat', ['ui.router','firebase','ui.bootstrap','angular-loading-bar']);

blocChat.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
   $locationProvider.html5Mode(true);
 
   $stateProvider.state('home', {
     url: '/',
     controller: 'Home.controller',
     templateUrl: '/templates/home.html'
   });

}]);

blocChat.controller('Home.controller', ["$scope", function($scope) {

   $scope.subText = "Turn the music up!";
   $scope.mainText = "Bloc Jams";

}]);

/*blocChat.controller("Home.controller", function($scope, $firebaseObject) {
  var ref = new Firebase("https://bloc-chat.firebaseio.com/");
  // download the data into a local object
  $scope.data = $firebaseObject(ref);
  // putting a console.log here won't work, see below

  $scope.subText = "Turn the music up!";
  $scope.mainText = "Bloc Jams";
});
*/

blocChat.factory('Room', ['$firebase', function($firebase) {

  var firebaseRef = new Firebase("https://bloc-chat.firebaseio.com/");
  var rooms = $firebase(firebaseRef.child('rooms')).$asArray();;

  return {
    all: rooms
  }
}])

