// function myfunction() {
// 	var thesize = document.getElementById("thecolor").value;
// 	var paragraph = document.getElementById("paragraph").style
// 	paragraph.fontSize = thesize + "px"
// }

function myfunction(){
	var a = document.getElementsByTagName("body")[0];
	var tag = document.getElementsByTagName("input")[0].value;
	a.style.fontSize = tag + "px"
}
