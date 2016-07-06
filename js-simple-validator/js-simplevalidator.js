//JS: Simple Validator

var pNumb = prompt("Hey you, what's your number? Don't worry, we will keep your info safe!", "xxx-xxx-xxxx");

function heyNow(number){
  var good = number.charAt(3) === '-' && number.charAt(7) === '-';
  if (good){
    alert("Valid");
  }else{
    alert("Please Enter a Valid Number");
  }
}
heyNow(pNumb);


var pBirth = prompt("So...When were you born?", "xx/xx/xx");
function heyBirth(date){

  var good = date.charAt(2) === '/' && date.charAt(5) === '/' && date !==isNaN(date) ;
  if (good){
    alert("Valid");
  }else{
    alert("Please Enter a Valid Birthdate");
  }
}
heyBirth(pBirth);

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

var pState = prompt("What state do you live in?", "XX");
function heyState(text){
  var good = text.toUpperCase() === true && text.length === 2;
  if (good){
    alert("Valid");
  }else{
    alert("Please Enter a Valid State abbreviation");
  }
}
heyState(pState);

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
