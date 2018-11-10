$(document).ready(function() {
	startTime();
});

function startTime() {
	var today = new Date();
	var hour = today.getHours();
	var minute = today.getMinutes();
	var second = today.getSeconds();

	// Reset the Blocks
	$('.hours').css('background-color', '#ffffff');
	$('.minutes').css('background-color', '#ffffff');
	$('.seconds').css('background-color', '#ffffff');

	// Set the hour blocks
	for (var i = 1; i <= hour; i++) {
		$('.hour'+i).css('background-color', '#ff0000');
	}

	// Set the minute blocks
	for (var i = 1; i <= minute; i++) {
		$('.minute'+i).css('background-color', '#00ff00');
	}

	// Set the second blocks
	for (var i = 1; i <= second; i++) {
		$('.second'+i).css('background-color', '#0000ff');
	}

	updatePopUpTime(hour, minute, second);

	// Do every 1/2 second
	var t = setTimeout(startTime, 500);
}

function formatTime(whichTime) {
	if (whichTime < 10) {
		whichTime = '0' + whichTime;
	}

	return whichTime;
}

function updatePopUpTime(hour, minute, second) {
	hour = formatTime(hour);
	minute = formatTime(minute);
	second = formatTime(second);

	$('#popUpTime').text('The time is ' + hour + ':' + minute + ':' + second);

	$('.container').hover(function() {
		$('#popUpTime').show();
	}, function () {
		$('#popUpTime').hide();
	})
}