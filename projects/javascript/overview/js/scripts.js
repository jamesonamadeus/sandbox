// //Variables
// var name = "Your Name";
// console.log(name);

// var a = 20;
// var b = 40;
// c = a + b;
// console.log(c);
// console.log(b - a);

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
// console.log(fullName);

// var age = 100;
// console.log(fullName + " age" + age);



// //function
// function converter(celcius){
// 	var f = celcius * 9/5 + 32;
// 	return f;
// }

// var c = 30;
// var f = converter(c);
// console.log(f);

// var c = 34;
// var f = converter(c);
// console.log(f);

// var c = 44;
// var f = converter(c);
// console.log(f);

// var c = 10;
// var f = converter(c);
// console.log(f);

// var c = 20;
// var f = converter(c);
// console.log(f);



// //Nested Functions
// var text = "Hello";

// function decorate(b){
// 	return "####-----" + b + "---####";
// }

// console.log(decorate(text));
// console.log(text);
// console.log(decorate("yoooo"));

// function decorateMore(b) {
// 	var a = decorate(b);
// 	return "(((" + a + ')))';
// }

// console.log(decorateMore("Courses"));



//If Statements
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

// var condition = distance ==="50";
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
// var isReady = true;

// console.log(isReady);
// console.log(!isReady);

// if (!isReady) {
// 	console.log("its not ready");
// }



// //If-Else Statements
// var mark = 3; 

// if (mark >= 6) {
// 	console.log("passed");
// } 

// else if (mark < 6 && mark > 4) {
// 	console.log("passed");
// } 

// else if (mark < 4 && mark >= 3) {
// 	console.log("eligible for exam");
// }

// else {
// 	console.log("failed");
// }

// console.log("whichever comes next..");



// //Switch Statements
// var mark = "B";

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



//While Loop
	var i = 1; 

	while (i <= 200){
		console.log(i);
		i++;

	}
	console.log("final value of i:" + i);



// // //Loop Jumps
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



//For Loops
for(var i = 1; i <= 100; i++) {
	console.log(i);
}

//with a Break
for(var i = 1; i <= 100; i++) {
	console.log(i);

	if (i == 50) {
		break;
	}
}



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



// //Arrays - Push and Pop
// 	var list = [1,2,3, 44];
// 	console.log(list);

// 	list.push(1,2,"hello");
// 	console.log(list);

// 	list.pop();
// 	list.pop();
// 	list.pop();
// 	console.log(list);

// //Arrays - Splice
// 	var list = [1, 2, 3, 4, 5, 6];
// 	console.log(list);

// 	list.splice(2, 0, 10, 20, 30);
// 	console.log(list);

// 	list.splice(2, 3);
// 	console.log(list);

// 	list.splice(2, 3, 100, 200);
// 	console.log(list);

// 	list.splice(-2, 1);
// 	console.log(list);

// //Arrays - Iterate
// 	var list = new Array(3, 4, 5, 6, 7, 8);

// 	var i = 0, len = list.length;
// 	while(i < len) {
// 		list[i]++;
// 		i++;
// 	}

// 	console.log(list);


// 	for (i = 0; i < len; i ++){
// 		list[i]++;
// 	}
// 	console.log(list);

// //Multidimensional - Arrays
// 	var list = [[1, 2, 3], [4, 4, 5], [7, 8, 9]];

// 	console.log(list);

// 	console.log(list[1][2]);
// 	console.log(list[2][0]);

// 	list[2][2] = 10;
// 	console.log(list);

// //Objects
// 	var a = new Object();
// 	var a = {};



// 	console.log(a);

// 	a.name = "Your Name";
// 	a.age = 100;
// 	a.city = "Santiago";
// 	a.friends = ["A", "B", "C"];
// 	a.someMethod = function(x, y) {
// 		return x + y;
// 	}

// 	console.log(a);

// 	console.log(a.city);
// 	console.log(a["city"]);

// 	console.log(a.someMethod(1, 2));

// //JSON
// 	var user = {
// 		name: "Peter",
// 		score: 100,
// 		country: "Chile",
// 		pets: ["pet1", "pet2", "pet3"],
// 		profile: {
// 			type: "private",
// 			account: "premium"
// 		}
// 	};

// 	console.log(user);
// 	console.log(user.country);
// 	console.log(user.pets[2]);
// 	console.log(user.profile.account);

// //Undefined
// 	var user = {
// 		name: "Peter",
// 		score: 100,
// 		country: "Chile",
// 		pets: ["pet1", "pet2", "pet3"],
// 		profile: {
// 			type: "private",
// 			account: "premium"
// 		}
// 	};

// 	if ("profile" in user) {
// 		console.log("the user has a profile")
// 	}

// 	console.log(user.photo);
// 	console.log(user["photo"]);

// 	if (!user.photo) {
// 		console.log("photo is not present");
// 	}





