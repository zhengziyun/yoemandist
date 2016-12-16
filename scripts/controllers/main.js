'use strict';

/**
 * @ngdoc function
 * @name App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the App
 */
angular.module('App')
.controller("con",["$scope","$http",function($scope,$http){
	$http({
		url:"http://47.90.20.200:1602/news-img1",
    method:"get"
	}).then(function(e){
    $scope.imgArr1 = e.data;
    console.log(e);
  },function(){
    alert("error!");
  });
  $http({
		url:"http://47.90.20.200:1602/news-img2/",
    method:"get"
	}).then(function(e){
    $scope.imgArr2 = e.data;
    console.log(e);
  },function(){
    alert("error!");
  });
  $http({
		url:"http://47.90.20.200:1602/news1/",
    method:"get"
	}).then(function(e){
    $scope.news1 = e.data;
    console.log(e);
  },function(){
    alert("error!");
  });
  $http({
		url:"http://47.90.20.200:1602/news2/",
    method:"get"
	}).then(function(e){
    $scope.news2 = e.data;
    console.log(e);
  },function(){
    alert("error!");
  });
}]);
