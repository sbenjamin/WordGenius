//Modified by: Steven Benjamin
//April 27, 2015
//www.stevenbenjamin.com

angular.module('wordgenius.services', ['ionic.utils'])

    .factory('Dictionary', function(Settings) {
        
        var dictionary = {"words":["amazing","beakers","cottage","dog","elephant","fauna","grasshopper","hiding","iota","journey", "king", "lion", "mango", "nonsense", "operational", "product", "quiet", "reason", "sandwich", "tomato", "universe", "version", "wage", "xenophobia", "zebra"]};
    
        var availableWords = [];
        
        var resetGame = function(){
            availableWords = [];
        };
    
        var startGame = function(){};
        var selectWord = function(){};
        var removeWord = function(){};
        var getWordCount = function(){};
    
        return {
            resetGame :resetGame,
            startGame : startGame,
            selectWord : selectWord,
            removeWord : removeWord
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

