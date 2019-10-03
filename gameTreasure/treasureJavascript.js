var getRandomNumber = function (size) {

	return Math.floor(Math.random() * size);
}


var getDistance = function (event, target) {

	var diffX = event.offsetX - target.x;
	var diffY = event.offsetY - target.y;

	return Math.sqrt((diffX*diffX) + (diffY*diffY));
}


var getDistanceHint = function (distance) {

	if (distance < 50) {
		return "Boiling hot";
	} else if (distance < 100) {
		return "Really hot";
	} else if (distance < 200) {
		return "Hot";
	} else if (distance < 300) {
		return "Warm";
	} else if (distance < 400) {
		return "Cold";
	} else if (distance < 500) {
		return "Really cold";
	} else if (distance < 600) {
		return "Very very cold";
	} else {
		return "Freezing";	
	}
}


var width = 800;
var height = 800;
var target;

var clicks;
var clicksLeft;

var init = function () {

	clicks = 0;
	clicksLeft = 20;

	target = {
		x: getRandomNumber(width),
		y: getRandomNumber(height)
	};

	$("#distance").text("Click on the map!");

	$("#clicksLeft").text("Clicks left : " + clicksLeft);

}

init();


$("#map").click(function (event) {

	clicks++;
	clicksLeft--;

	var distance = getDistance(event,target);

	var distanceHint = getDistanceHint(distance);
	
	$("#distance").text(distanceHint);
	
	$("#clicksLeft").text("Clicks left : " + clicksLeft);

	if (distance < 25) {
		alert("Treasure found! Clicks made: " + clicks);

		init();
	}

	if (clicksLeft === 0) {
		alert("Treasure not found in " + clicks + " clicks.");
		
		init();
	}
});