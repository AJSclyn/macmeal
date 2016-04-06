// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('macmeal', ['ionic'])

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/sign-in');

  //overall routing
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
    .state('home', {
      url: '/home',
      templateUrl: 'views/home.html',
      controller: 'homeCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html'
    });

  //new-user form routing
  $stateProvider
    .state('create-account', {
      url: '/create-account',
      templateUrl: 'views/new/create-account.html',
      controller: 'createAccountCtrl'
    })
    .state('create-account.login', {
      url: '/login',
      templateUrl: 'views/new/login.html'
    })
    .state('create-account.body', {
      url: '/body',
      templateUrl: 'views/new/body.html'
    })
    .state('create-account.activity', {
      url: '/activity',
      templateUrl: 'views/new/activiy.html'
    })
    .state('create-account.goals', {
      url: '/goals',
      templateUrl: 'views/new/goals.html'
    })

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
    $state.go('home')
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
