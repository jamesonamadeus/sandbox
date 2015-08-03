function thealertmessage() {
	var box = document.getElementById("box").value;
	switch (box){
		case "man":
		alert("Hello Sir");
		alert("Have a nice day");
		break;
		case "woman":
		alert("Hello Miss");
		break;
		case "dog":
		alert("Hello Dog");
		break;
		case "cat":
		alert("Hello Cat");
		break;
		default:
		alert("Please select an option");
		return false;
		break;
	}



}	
