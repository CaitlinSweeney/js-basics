//JS: Simple Validator

function heyNow(){
  var pNumb = prompt("Hey you, what's your number? Don't worry, we will keep your info safe!", "xxx-xxx-xxxx");
  var good = pNumb.charAt(4) + pNumb.charAt(8) == "-" ;
  if (pNumb == good){
    alert("Valid");
  }else{
    alert("Please Enter a Valid Number");
  }
}
