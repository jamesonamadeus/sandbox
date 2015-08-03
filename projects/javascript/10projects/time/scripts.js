function myfunction() {
// 	var d = new Date ()
// 	document.write("The Date is" + d + "<br>")
// 	document.write("Get Date" + d.getDate() + "<br>")
// 	document.write("Get Full Year" + d.getFullYear() + "<br>")
// 	document.write("Get Time" + d.getTime() + "<br>")

// }

	var d = new Date();
	var day = d.getDay();
	var time = d.getHours();
	var today = document.getElementById("today");
	if (day == 0 || day == 6){
		today.innerHTML = "Sorry We're Closed";
		today.style.color = "#E01931"
	} else if (time < 9 || time > 17){
		today.innerHTML = "Sorry We're Closed"
		today.style.color = "#E01931"
	} else {
		today.innerHTML = "We are open!"
		today.style.color = "#2CC990"

	}
}

