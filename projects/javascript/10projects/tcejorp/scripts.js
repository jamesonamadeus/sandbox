function namefocus(){
	document.getElementById("namepara").innerHTML = "First Name Only";
}

function nameblur(){
	document.getElementById("namepara").innerHTML = "&nbsp;";
}


function emailfocus(){
	document.getElementById("emailpara").innerHTML = "Please provide a real email address";
}

function emailblur(){
	document.getElementById("emailpara").innerHTML = "&nbsp;";
}

function passwordfocus(){
	document.getElementById("passwordpara").style.visibility = "visible"
}

function passwordblur(){
	if(	document.getElementsByTagName("input")[2].value.length< 5){
			document.getElementById("passwordpara").innerHTML = "Not Long Enough";
			document.getElementById("passwordpara").style.color = "red";

	} else {
	document.getElementById("passwordpara").style.visibility = "hidden"
	}
}

function passwordconfirm(){
	var first = document.getElementByTagName("input")[2].value
	var second = document.getElementByTagName("input")[3].value
	if (first != second){
		document.getElementById("passwordconf").style.visbility = "visible"

	} else {
		document.getElementById("passwordconf").style.visbility = "hidden"
	}
}

function ischecked() {
	if(document.getElementsByTagName("input")[4].checked == true){
		document.getElementsByTagName("input")[5].style.display = "block"
	}  else {
		document.getElementById("input").style.display = "hidden"
	}
}
