
var handle = angular.module('myapp',[]);

handle.controller("person", ["$scope",function(scopeobject){                
    scopeobject.fname = "Ratan";                
    scopeobject.lname = "Tata";                
}]);
