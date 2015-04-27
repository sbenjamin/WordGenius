//Modified by: Steven Benjamin
//April 27, 2015
//www.stevenbenjamin.com

angular.module('wordgenius.services', ['ionic.utils'])

    .factory('DictionaryService', function(Settings) {
        
        var dictionary = {"words":["amazing","beakers","cottage","dog","elephant","fauna","grasshopper","hiding","iota","journey", "king", "lion", "mango", "nonsense", "operational", "product", "quiet", "reason", "sandwich", "tomato", "universe", "version", "wage", "xenophobia", "zebra"]};
    
        availableWords = {};
        selectedWords = {};
        
        var resetGame = function(){
            availableWords = angular.copy(dictionary);
            selectedWords = [];
            console.log('Game Started')
        };
    
        var selectWord = function(){};
        var removeWord = function(){};
    
        var getWordCount = function(){
            return selectedWords.length;
        };
    
        var getAvailableWords = function(){
            return availableWords.words;
        }
    
        return {
            resetGame : resetGame,
            selectWord : selectWord,
            removeWord : removeWord,
            getWordCount : getWordCount,
            getAvailableWords : getAvailableWords
        };
      
    })


    .constant('Settings',{
        maxWords : 10
    })
    .constant('Author', {
        name  : 'Steven Benjamin',
        email : 'steven@stevenbenjamin.com',
        phone : '415-760-3513'
    });

