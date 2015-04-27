//Modified by: Steven Benjamin
//April 27, 2015
//www.stevenbenjamin.com

angular.module('wordgenius.services', ['ionic.utils'])

    .factory('DictionaryService', function(Settings) {
        
        var dictionary = {"words":["amazing","beakers","cottage","dog","elephant","fauna","grasshopper","hiding","iota","journey", "king", "lion", "mango", "nonsense", "operational", "product", "quiet", "reason", "sandwich", "tomato", "universe", "version", "wage", "xenophobia", "zebra"]};
    
        availableWords = [];
        selectedWords = [];
        
        var resetGame = function(){
            var deepCopy = angular.copy(dictionary);
            availableWords = deepCopy.words;
            selectedWords = [];
            console.log('Game Started')
        };
    
        var addselectedWord = function(word){
            selectedWords.unshift(word);
            availableWords.splice(availableWords.indexOf(word), 1);
        };
        var removeWord = function(){};
    
        var getWordCount = function(){
            return selectedWords.length;
        };
    
        var getAvailableWords = function(){
            return availableWords;
        }
    
        return {
            resetGame : resetGame,
            addselectedWord : addselectedWord,
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

