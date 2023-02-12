
var handle = angular.module('myapp',[]);

handle.controller("form", ["$scope",function(c){                
    c.text = 'I am text value';    
    
    c.selectdata={
        aryCity : [
            {id: '1', name: 'London'},
            {id: '2', name: 'Mumbai'},
            {id: '3', name: 'Honai'},
            {id: '4', name: 'Melbourne'}
        ],
        selectedOption : {id: '3', name: 'Honai'}
    };
    
    c.flag1 = false;
    
    c.color = 'Black';
    

}]);
