// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('macmeal', ['ionic'])

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/sign-in');

  $stateProvider
    .state('signin', {
      url: '/sign-in',
      templateUrl: 'views/sign-in.html',
      controller: 'signInCtrl'
    })
    .state('fogotpassword', {
      url: '/forgot-password',
      templateUrl: 'views/forgot-password.html',
      controller: 'forgotPasswordCtrl'
    })
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "views/tabs.html"
    })
    .state('tabs.home', {
      url: '/home',
      views: {
        'home-tab': {
          templateUrl: 'views/home.html',
          controller: 'homeCtrl'
        }
      }
    })
    .state('tabs.about', {
      url: '/about',
      views: {
        'about-tab': {
          templateUrl: 'views/about.html'
        }
      }
    });
})

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});


app.controller('signInCtrl', function($scope, $state){
  $scope.signIn = function(user) {
    $state.go('tabs.home')
  }
});

app.controller('forgotPasswordCtrl', function($scope, $state){

});

app.controller('homeCtrl', function($scope, $state, $http, calendarService){
  $scope.$watch('search', function(){
    fetch();
  });

  $scope.search = "Chicken";
  function fetch(){
    $http({
      method: 'GET',
      url: 'https://community-food2fork.p.mashape.com/search?q=shredded+chicken',
      headers: {'X-Mashape-Key': ''}
    }).then(function(data){
      $scope.details = data.data;
    });
  }
});

app.factory('calendarService', function($http){
  return {};
});
