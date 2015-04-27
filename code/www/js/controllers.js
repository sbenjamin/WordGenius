//Modified by: Steven Benjamin
//April 27, 2015
//www.stevenbenjamin.com

angular.module('wordgenius.controllers', ['ionic', 'wordgenius.services','ui.bootstrap'])

//Discover Controller
.controller('PlayController', function($scope, $ionicLoading, $filter, $timeout, DictionaryService, Settings) {

    $scope.hideMsg = true;
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
 
    //restrict type ahead to words starting with the letter.
    $scope.startsWith = function(word, viewValue) {
        return word.substr(0, viewValue.length).toLowerCase() == viewValue.toLowerCase();
    };
    
    $scope.removeWord = function(id,word){
        DictionaryService.removeSelectedWord(word);
        $("#_"+id).remove();
    };
    
    $scope.checkResults = function(){
        console.log('checkResults')
        var listBox = jQuery( "[role='listbox']" );
        //get the length of the type ahead results.
        if(DictionaryService.getWordCount() >= Settings.maxWords){
            $scope.hideMsg = false;
            $(".msg").html('You have reached the maximum of '+Settings.maxWords+' words.');
            $scope.selectedWord = '';
            listBox.hide()
        }
        else if( $scope.selectedWord && listBox.children().length === 0){
            console.log('There are no words left that start with:'+$scope.selectedWord);
             $scope.hideMsg = false;
            $(".msg").html('There are no words left that start with "'+$scope.selectedWord+'"');
         }else{
            $scope.hideMsg = true;
            listBox.show();
         }
    };
    
    var getColor = function(){
        return Math.floor((Math.random()*6));
    }
    
    var applyRandomColor = function(){
        $(".wordCircle").last().addClass('color'+getColor());
    }

    $scope.afterSelect = function(item){
        console.log('afterSelect:',item);
        DictionaryService.addselectedWord(item);
        $scope.selectedWord = '';
        $timeout(applyRandomColor,100);
    }
    
    $scope.selectedWordAry = DictionaryService.getSelectedWords();
    console.log($scope.selectedWordAry )

    
})

// Favorites Controller
.controller('ResetController', function($scope) {})

//Tab Controller
.controller('TabsCtrl', function() {})



