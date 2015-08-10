function myfunction(){
	document.getElementById('popup').style.display = "block";
	var width = window.innerWidth
	var height = window.innerHeight;
	var mask = document.getElementById('mask')
	mask.style.height = height + "px";
	mask.style.width = width + "px";
}

function closebox(){
	document.getElementById('popup').style.display = "none";
}

setTimeout(
	function(){
		document.getElementsByTagName('input')[0].click()
	}, 2000

)