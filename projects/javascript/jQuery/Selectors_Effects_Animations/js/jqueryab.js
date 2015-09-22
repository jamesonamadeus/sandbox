/*Selectors, Events & Effects*/
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

/*Effects*/
$(document).ready(function() {
	$('li').click(function() {
		$(this).hide(100);
		
	});

	$('button').click(function() {
		$('ul').stop();
		$('li').slideToggle(1000);
	});

});

/*Aniamtions*/
function doAnimation() {
	var properties = { 	fontSize : '10px',
						width : "100px",
						height: '100px',
						top: "+=30px",
						left: "+=150px"
					};

	$("#title").animate(properties, 1000);
}

/*Dom Content*/
	function test() {
	alert($('ul').text());
}







