// function hello(){
// 	alert("Hello Boulder!");
// }


function yourName(){
	var bananas = prompt("What's Your Name", "SAY YOUR NAME!")
	if (bananas != null) {
		document.getElementById("apples").innerHTML = "Hello" + " " + bananas + "!";
	}
}
	
// yourName();