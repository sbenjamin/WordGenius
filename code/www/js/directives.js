
wordgeniusApp.directive('selectedWords',function(){
    return{
        restrict : 'A',
        replace : true,
        controller : 'PlayController',
        template : '<div>I am selected Words</div>'
    }
});