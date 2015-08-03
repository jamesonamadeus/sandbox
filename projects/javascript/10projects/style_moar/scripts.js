function bigger(){
	document.getElementsByTagName("body")[0].style.fontSize = 2.3 + "em";
	document.getElementsByTagName("input")[0].style.display = "none";
	document.getElementsByTagName("input")[1].style.display = "block";
}

function smaller(){
	document.getElementsByTagName("body")[0].style.fontSize = 1 + "em";
	document.getElementsByTagName("input")[0].style.display = "block";
	document.getElementsByTagName("input")[1].style.display = "none";
}