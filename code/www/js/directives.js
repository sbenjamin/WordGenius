
wordgeniusApp.directive('selectedWords',function($compile){
    return{
        restrict : 'A',
        scope : false,
        replace : true,
        controller : 'PlayController',
        template : '<div class="circleWrapper">'+
                        '<div ng-repeat="word in selectedWordAry | slice:0:5">'+
                            '<div class="wordCircle" ng-click="removeWord($index,word)" id="_{{$index}}">{{word}}</div>'+
                        '</div>'+
                        '<div ng-repeat="word in selectedWordAry | slice:5:10">'+
                            '<div class="wordCircle" ng-click="remove(this)">{{word}}</div>'+
                        '</div>'+
                    '</div>',
        link: function(scope, element, attrs) {
            $compile(element.contents())(scope.$new());
        }
    }
});