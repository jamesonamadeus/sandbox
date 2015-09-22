$(document).ready(function() {
	$('p').click(function() {
		$(this).css('color', 'red');
	});

	$('li').dblclick(function() {
		$(this).css('color', 'red');
	});

	$('li').hover(function() {
		$(this).css('color', 'red');
	}, function() {
		$(this).css('color', 'black');
	});

	$(document).keypress(function() {
		console.log('press');
	});

	$(document).keyup(function() {
		console.log('up');
	});

	$('input').focus(function() {
		$(this).css('border', '5px solid red');
	});

	$('input').blur(function() {
		$(this).css('border', '');
	});

});