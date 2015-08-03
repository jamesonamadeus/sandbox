function namefocus(){
	document.getElementById("namepara").innerHTML = "First Name Ony";
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
	document.getElementById("passwordpara").style.visibility = "hidden"
}