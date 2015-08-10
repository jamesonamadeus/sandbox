function myfunction(){
	document.getElementById('popup').style.display = "block";
}

function closebox(){
	document.getElementById('popup').style.display = "none";
}

setTimeout(
	function(){
		document.getElementById('input')[0].click()
	}, 2000

)