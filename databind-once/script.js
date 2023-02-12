
var handle = angular.module('myapp',[]);

handle.controller("clock", ["$scope",function(c){      
    var dt = new Date();
    var dt_str = dt.toISOString();
    c.timestr = dt_str;                
    c.getTimeSTring = function(){
        var dt = new Date();
        var dt_str = dt.toISOString();
        this.timestr = dt_str;                    
    }
}]);

