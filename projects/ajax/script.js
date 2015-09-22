/*AJAX*/
// function onDataReceived(data) {
// 	console.log(data);

// 	$('#name').text(data.name);
// 	$('#city').text(data.city);
// 	$('#weather').text(data.weather.weather);
// 	$('#temperature').text(data.weather.temp);
// }


// $(document).ready(function() {

// 	$('button').click(function() {
// 		var url = 
// 		'http://services.faa.gov/airport/status/{CODE}?format=application/json'
// 		.replace('{CODE}', $('input').val());

// 		$.get(url, onDataReceived);
// 	});

// });

/*AJAX Utilization*/
function onDataReceived(data, status, xhr) {
	console.log(data);
	console.log(status);
	console.log(xhr);

	$('#name').text(data.name);
	$('#city').text(data.city);
	$('#weather').text(data.weather.weather);
	$('#temperature').text(data.weather.temp);
}

function onError(xhr,status, error) {
	console.log(xhr);
	console.log(status);
	console.log(error);

	var msg;

	if (error == "Internal Server Error") {
		msg = xhr.responseJSON.Message;
	} 

	else if (status == 'timeout'){
		msg = "The server took too long to respond.";
	}
	else {
		msg = "Unable to communicate with the server."
	}

	alert(msg);
}

$(document).ready(function() {

$('button').click(function() {
	var request =
	{
		url : 
		'http://services.faa.gov/airport/status/{CODE}'
		.replace('{CODE}', $('input').val()),
		type: 'GET',
		success: onDataReceived,
		headers: { Accept : 'application/json'},
		error: onError,
		timeout: 3000
	};

		$.ajax(request);
	});

});
