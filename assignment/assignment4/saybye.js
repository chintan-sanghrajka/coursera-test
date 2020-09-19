(function(window) {
	var speakbye = "Good Bye";
	var byeSpeaker = function (name) {
  		console.log(speakbye + " " + name);
	}
	
	window.byeSpeakerglobal = byeSpeaker;

})(window);