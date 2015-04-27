//Modified by: Steven Benjamin
//April 27, 2015
//www.stevenbenjamin.com

angular.module('wordgenius.controllers', ['ionic', 'wordgenius.services','ui.bootstrap'])

//Discover Controller
.controller('PlayController', function($scope, $ionicLoading, $timeout, DictionaryService) {

    
    DictionaryService.resetGame();
    
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
    
    
    $scope.selected = undefined;
    $scope.dictionary = DictionaryService.getAvailableWords();
    console.log('getAvailableWords',$scope.dictionary)
 
    
    $scope.startsWith = function(word, viewValue) {
        return word.substr(0, viewValue.length).toLowerCase() == viewValue.toLowerCase();
    };

    $scope.afterSelect = function(item){
        console.log('afterSelect:',item);
        DictionaryService.addselectedWord(item);
        $scope.selectedWord = '';
    }

    
})

// Favorites Controller
.controller('ResetController', function($scope) {})

//Tab Controller
.controller('TabsCtrl', function() {})



