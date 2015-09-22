/*Dom Content*/
	function test() {
	($('p').html('<a href="#">Link</a>'));
}

function test() {
	($('input').val('my value'));
}

/*DOM Structure*/
function addLi() {
	var count = $('ul').children().length + 1;
	var txt = "List element " + count;
	var newLi = $ ('<li></li>').text(txt);
	$('ul').append(newLi);
}

function removeLi() {
	if ($('ul').children().length == 0) {
		return;
	}

	$('ul li:last').remove()
}

/*DOM Traversal: Up & Down on the Tree*/
$('body').children('p').css('outline', '1px solid red');

$('body').children('#title').css('outline', '1px solid blue');

$('h1').siblings().css('outline', '1px solid green');

$('p:last').nextUntil().css('outline', '1px solid grey');










