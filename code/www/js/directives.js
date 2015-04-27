//Steven Benjamin
//April 27, 2015
//www.stevenbenjamin.com

wordgeniusApp.directive('selectedWords',function($compile){
    return{
        restrict : 'A',
        scope : false,
        replace : true,
        controller : 'PlayController',
        template : '<div class="circleWrapper">'+
                        '<div ng-repeat="word in selectedWordAry | slice:0:5">'+
                            '<div class="wordCircle" ng-click="removeWord(\'_A\'+$index,word)" id="_A{{$index}}">{{word}}</div>'+
                        '</div>'+
                        '<div ng-repeat="word in selectedWordAry | slice:5:10">'+
                            '<div class="wordCircle" ng-click="removeWord(\'_B\'+$index,word)" id="_B{{$index}}">{{word}}</div>'+
                        '</div>'+
                    '</div>',
        link: function(scope, element, attrs) {
            $compile(element.contents())(scope.$new());
        }
    }
});