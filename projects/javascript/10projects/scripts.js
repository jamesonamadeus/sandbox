var num;
var text;

num = 10;
txt = "A dozen is ";

document.write(txt + (num+2));

num = "Hello ";
txt = 100;

document.write("<br>" + num +txt);

/*This Function greets the user with the name entered*/
function greetUser() {
	var userInput = document.getElementById('userName').value; //TODO: clarify this
	document.getElementById('greeting').innerHTML = 'Hello,' + userInput;
}

