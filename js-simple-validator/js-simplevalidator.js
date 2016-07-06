//JS: Simple Validator
// PHONE NUMBER
var pNumb = prompt("Hey you, what's your number? Don't worry, we will keep your info safe!", "xxx-xxx-xxxx");

function heyNow(number){
  var good = number.charAt(3) === '-' &&
             number.charAt(7) === '-';
  if (good){
    alert("Valid");
  }else{
    alert("Please Enter a Valid Number");
  }
}
heyNow(pNumb);

// BIRTHDAY
var pBirth = prompt("So...When were you born?", "xx/xx/xx");
var date = " "
function heyBirth(date){
  if (date.length == 8 &&
      date.charAt(2) == '/' &&
      date.charAt(5) == '/' &&
      date != /[A-Za-z0-9_]/) {
      alert("Valid");
    }else{
      alert("Please Enter a Valid Birthdate");
    }
}
heyBirth(pBirth);

/\b\w[A-Z]\b/
/\b\d{2}?\d{2}?\d{2}\b/

// POSTAL CODE
var pPost = prompt("What's your postal code?", "xxxxx");
function heyPost(post){
  var good = post.length === 5;
  if (good){
    alert("Valid");
  }else{
    alert("Please Enter a Valid Postal Code");
  }
}
heyPost(pPost);

// STATE
var pState = prompt("What state do you live in?", "XX");
function heyState(text){
  var good = text.match(/\b[A-Z]{2,}\b/) === true && text.length === 2;
  if (good){
    alert("Valid");
  }else{
    alert("Please Enter a Valid State abbreviation");
  }
}
heyState(pState);


// MARRIAGE
var pMarr = prompt("Are you married?", "Yes or No");
function heyMarr(text){
  var good = text.toUpperCase().toLowerCase() === true && text === "yes" || "no";
  if (good){
    alert("Valid");
  }else{
    alert("Please Enter a Yes or No");
  }
}
heyMarr(pMarr);
