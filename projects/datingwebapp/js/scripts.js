var hours = 10;
var seconds = hours * 3600;
console.log(seconds);

var c = 36;
var f = c * 9/5 + 32;
document.write(f);


var name = "ABC";
var lastName = "XYZ";

var fullName = name + ", " + lastName;
console.log(fullName + ' age:' + age);



function converter(celcius){
	var f = celcius * 9/5 + 32;
	return f;
}

converter text = "Hello";

function decorate(t){
	return "####-----" + "t" + "---####";
}

console.log(decorate(text));
console.log(text);
console.log(decorate("yoooo"));





var distance = 50

if(distance == 50){;

if(distance >= 200){
	console.log("too.far");
}

if(distance < 100){
	console.log("close");
}

if(distance == 50){
	console.log("equal to 50");
}

if(distance !=50){
	console.log("not equal to 50");
}

var condition = distance !=50;
console.log(condition);

var cond2 = true;
var cond3 = false;


var age = 50;
var isRunner = true;
var isSmoker = false;

//and &&
if (isRunner && isSmoker){
	console.log("and condition is true");
}

//or //
if (isRunner || isSmoker){
	console.log("or condition is true");
	//code
}

if (isRunner && age > 30) {
	console.log("hey");
}


var a = 1;
var isReady = a == 0;

console.log(isReady);
console.log(!isReady);

if (!isReady) {
	console.log("its not ready")
}


var mark = 2; 

if (mark >= 6) {
	console.log("passed");
} else if (mark < 6 && mark > 4){
	console.log("passed");
} else if (mark < 4 && mark >= 3){
	console.log("eligible for exam");
}

else {
	console.log("failed");
}





var mark = "X";

switch(mark) {
	case "A":
		console.log("did great!");
		break;
	case "B":
		console.log("did OK");
		break;
	case "C":
		console.log("not so good");
		break;
	default:
		console.log("all other cases");
		break;
}



//1. function for final mark
function finalMarkMessage(mark) {
	var a;
	switch(mark) {
		case "A":
			a = "passed";
			break;
		case "B":
			a = "barely passed";
			break;
		default:
			a = "I dont know how you did";
			break;
	}
	return a;
}

console.log(finalMarkMessage("X"));
console.log(finalMarkMessage("B"));
console.log(finalMarkMessage("C"));



//2. function for title
function nameWithTitle(name, gender){
	if (gender == "M") {
		return "Mr " + name;
	}
	else if (gender == "F") {
		return "Ms " + name;
	}
	else {
		return "?? " + name;
	}
}

console.log(nameWithTitle("John", "M"));
console.log(nameWithTitle("Susan", "F"));







