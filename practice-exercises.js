// Practice JavaScript Functions: Week 1

// lengths

Var words = ["hello", "what", "is", "up", "dude"]
   var newords = []
   
   function lengths(words){
       for( var i = 0; i < words.length; i++){
           newords.push(words[i].length)
       }
       console.log(newords)
   }
lengths(words)

// ....

function transmogrifier(a,b,c){
  var result = a * b
   console.log(Math.pow(result,c))
}

transmogrifier(5, 4, 3)
transmogrifier(13, 12, 5)
transmogrifier(42, 13, 7)

// Word Reverse

var str = "Now I know what a TV dinner feels like"

function wordReverse(string){
    var result = string;
    console.log(result.split(" ").reverse().join(" "));
}

wordReverse(str)