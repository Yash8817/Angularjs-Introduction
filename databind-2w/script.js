
var handle = angular.module('myapp',[]);

handle.controller("maths", ["$scope",function(c){                
    c.a=0;
    c.b=0;
    c.sum=0;
    c.calculate = function(){
        this.sum = parseInt(this.a) + parseInt(this.b);
    }
}]);
