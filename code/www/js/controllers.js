//Modified by: Steven Benjamin
//April 27, 2015
//www.stevenbenjamin.com

angular.module('wordgenius.controllers', ['ionic', 'wordgenius.services'])

//Discover Controller
.controller('PlayController', function($scope, $ionicLoading, $timeout) {

    // helper function for loading
    var showLoading = function(isVisible) {       
        if(typeof(isVisible)==='undefined'){isVisible = true;}
        if(isVisible){
            $ionicLoading.show({
                template: '<i class="ion-loading-c"></i>',
                noBackdrop: false
            });
        }
        else{
            $ionicLoading.hide();
        }
    };

    // set loading to true first time while we retrieve songs from server.
    showLoading(true);
    
    //Simulated loading of dictionary.
    $timeout(function(){showLoading(false)}, 750);

   

}) //PlayController

// Favorites Controller
.controller('ResetController', function($scope) {


})

//Tab Controller
.controller('TabsCtrl', function() {
    

});

