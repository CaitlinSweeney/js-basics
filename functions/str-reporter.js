
function letterCapitalize(string){
 var str = 'creepy leather dog pants'
 console.log(str.charAt(0).toUpperCase() + str.slice(1)str.substring(1).toLowerCase());
}

function letterCapitalize(string){
 var str = 'creepy leather dog pants'
console.log(str.replace(/\b[a-z]/g,function(f){return f.toUpperCase();}));
}

// Write a function called letterCapitalize which takes a single string parameter and capitalizes the first letter of each word in the string. You can assume that words in the input string will be separated by only one space.
//

function wordCount(str) {
 var puppy = "I'm not a fan of the stinky cheese man"
 console.log(puppy.split(" ").length);
}
// Write a function called wordCount which takes a single string parameter and returns the number of words the string contains (ie. "Never eat shredded wheat" would return 4). You can assume that words in the input string will be separated by only one space.
//
var n = 3
function optimusPrime(n){
 if (n===1){
 return false;
 }else if(n === 2){
   return true;
 } else
   { for(var x = 2; x < n; x++)
     {if(n % x === 0){return false;
     }
   }
   return true;
     }
   }

//
// Write a function called primeTime that takes a single number parameter and returns true if the parameter is a prime number, otherwise false. The range will be between 1 and 216.
