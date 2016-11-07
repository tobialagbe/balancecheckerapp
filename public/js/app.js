var app = angular.module('myApp', ['ui.router','myApp.controllers','ngStorage']);

app.config(function($stateProvider,$urlRouterProvider){

 $stateProvider

 .state('hello',{
  url:'/hello',
  templateUrl:'views/hello.html',
  controller: 'MyCtrl'
  })


  .state('admin',{
  url:'/admin',
  templateUrl:'views/admin.html',
  controller: 'MyCtrl'
  })


    .state('me',{
  url:'/me',
  templateUrl:'views/me.html',
  controller: 'MyCtrl'
  })


  .state('register',{
  url:'/register',
  templateUrl:'views/reg.html',
  controller: 'MyCtrl'
  })

  .state('login',{
  url:'/login',
  templateUrl:'views/login.html',
  controller: 'MyCtrl'
  })


  .state('edit',{
  url:'/edit',
  templateUrl:'views/edit.html',
  controller: 'MyCtrl'
  })








   $urlRouterProvider.otherwise('/hello');

    });