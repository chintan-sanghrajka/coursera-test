(function(window) {
	var speakhello = "Hello";
	var helloSpeaker = function (name) {
		console.log(speakhello + " " + name);
	}

	window.helloSpeakerglobal = helloSpeaker;

})(window);
