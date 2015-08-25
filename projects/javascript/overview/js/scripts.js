// //Variables
// var a = 10;
// a = a + 100;
// console.log(a);



// //Operations
// //1. hours to second
// var hours = 10;
// var seconds = hours * 3600;
// console.log(seconds);

// //2. Celcius to Fahrenheit
// var c = 36.5;
// var f = c * 9/5 + 32;
// console.log(f);

// console.log(2 + 3 * 2);
// console.log((2 + 3) * 2);



// //Strings
// var name = "ABC";
// var lastName = "XYZ";

// var fullName = name + ", " + lastName;
// console.log(fullName + ' age:' + age);

// var age = 100;
// console.log(fullName + " age" + age);




// //function
// function converter(celcius){
// 	var f = celcius * 9/5 + 32;
// 	return f;
// }

// var c = 30;
// var f = c * 9/5 + 32;
// console.log(f);

// var c = 34;
// var f = c * 9/5 + 32;
// console.log(f);

// var c = 44;
// var f = c * 9/5 + 32;
// console.log(f);

// var c = 10;
// var f = c * 9/5 + 32;
// console.log(f);

// var c = 20;
// var f = c * 9/5 + 32;
// console.log(f);



// //Nested Functions
// var text = "Hello";

// function decorate(t){
// 	return "####-----" + t + "---####";
// }

// console.log(decorate(text));
// console.log(text);
// console.log(decorate("yoooo"));

// function decorateMore(t) {
// 	var a = decorate(t);
// 	return "(((" + a + ')))';
// }

// console.log(decorateMore("Courses"));



// //If Statements
// var distance = 50;

// if(distance >= 200){
// 	console.log("too far");
// }

// if(distance <= 100){
// 	console.log("close");
// }

// if(distance == 50){
// 	console.log("equal to 50");
// }

// if(distance !=50){
// 	console.log("not equal to 50");
// }

// var condition = distance !=50;
// console.log(condition);

// var cond2 = true;
// var cond3 = false;

// if (cond3) {
// 	console.log("its true!");
// }



// //Boolean Algebra
// var age = 40;
// var isRunner = true;
// var isSmoker = false;

// //and &&
// if (isRunner && isSmoker){
// 	console.log("and condition is true");
// }

// //or //
// if (isRunner || isSmoker){
// 	console.log("or condition is true");
// 	//code
// }

// if (isRunner && age > 30) {
// 	console.log("hey");
// }



// //Negating a Condition
// var a = 1;
// var isReady = false;

// console.log(isReady);
// console.log(!isReady);

// if (!isReady) {
// 	console.log("its not ready");
// }



// //If-Else Statements
// var mark = 0; 

// if (mark >= 6) {
// 	console.log("passed");
// } else if (mark < 6 && mark > 4){
// 	console.log("passed");
// } else if (mark < 4 && mark >= 3){
// 	console.log("eligible for exam");
// }

// else {
// 	console.log("failed");
// }

// console.log("whichever comes next..");



// //Switch Statements
// var mark = "X";

// switch(mark) {
// 	case "A":
// 		console.log("did great!");
// 		break;
// 	case "B":
// 		console.log("did OK");
// 		break;
// 	case "C":
// 		console.log("not so good");
// 		break;
// 	default:
// 		console.log("all other cases");
// 		break;
// }



// //Functions with Conditions
// //1. function for final mark
// function finalMarkMessage(mark) {
// 	var a;
// 	switch(mark) {
// 		case "A":
// 			a = "passed";
// 			break;
// 		case "B":
// 			a = "barely passed";
// 			break;
// 		default:
// 			a = "I dont know how you did";
// 			break;
// 	}
// 	return a;
// }

// console.log(finalMarkMessage("X"));
// console.log(finalMarkMessage("B"));
// console.log(finalMarkMessage("C"));



// //2. function for title
// function nameWithTitle(name, gender){
// 	if (gender == "M") {
// 		return "Mr " + name;
// 	}
// 	else if (gender == "F") {
// 		return "Ms " + name;
// 	}
// 	else {
// 		return "?? " + name;
// 	}
// }

// console.log(nameWithTitle("John", "M"));
// console.log(nameWithTitle("Susan", "F"));



// //While Loop
// 	var i = 1; 

// 	while (i <= 200){
// 		console.log(i);
// 		i++;

// 	}
// 	console.log("final value of i:" + i);



// //Loop Jumps
// var num = 1;

// while(num <= 100) {
// 	num++;

// 	if (num == 50) {
// 		break;
// 	}

// 	console.log(num);
// }

// var num = 1;

// while(num <= 100) {
// 	num++;

// 	if (num >= 50 && num <= 60) {
// 		continue;
// 	}

// 	console.log(num);
// }



// //For Loops
// for(var i = 1; i <= 100; i++) {
// 	console.log(i);
// }

// //with a Break
// for(var i = 1; i <= 100; i++) {
// 	console.log(i);

// 	if (i == 50) {
// 		break;
// 	}

// }



// //Arrays
// var list = [10, 100, "asdf", true, 100];
// 	console.log(list);

// var list = new Array(10, 100, "asdf", true, 100);
// 	console.log(list2);

// var a = list2[2];
// consolelog(a);

// list2[3] = false;
// console.log(list2);

//  console.log(list2[100]);



//Arrays - Push and Pop
var list = [1,2,3, 44];
	console.log(list);

	list.push(1,2,"hello");
	console.log(list);

	list.pop();
	list.pop();
	list.pop();
	console.log(list);

//Arrays - Splice
var list = [1, 2, 3, 4, 5, 6];
	console.log(list);

	list.splice(2, 0, 10, 20, 30);
	console.log(list);

	list.splice(2, 3);
	console.log(list);

	list.splice(2, 3);
	console.log(list);

	list.splice(2, 3);
	console.log(list);




