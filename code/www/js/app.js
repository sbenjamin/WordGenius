

//Steven Benjamin
//April 27, 2015
//www.stevenbenjamin.com


angular.module('wordgenius', ['ionic', 'wordgenius.controllers'])

.run(function($ionicPlatform, $rootScope, $state) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
        // setup an abstract state for the tabs directive
        .state('tab', {
            url        : '/tab',
            abstract   : true,
            templateUrl: 'templates/tabs.html',
            controller : 'TabsCtrl'
        })
        .state('tab.play', {
            url: '/play',
            views: {
                'tab-discover': {
                    templateUrl: 'templates/discover.html',
                    controller: 'PlayController'
                }
            }
        })
        .state('tab.reset', {
            url: '/reset',
            views: {
                'tab-favorites': {
                    templateUrl: 'templates/favorites.html',
                    controller: 'ResetController'
                }
            }
        });

    $urlRouterProvider.otherwise('/tab/play');
});