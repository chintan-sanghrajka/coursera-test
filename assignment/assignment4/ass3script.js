(function () {

var namesArr = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < namesArr.length; i++) {
  var firstalpha = namesArr[i].charAt(0).toLowerCase();

  if (firstalpha === 'j') {
    byeSpeakerglobal(namesArr[i]);
  }
  else {
    helloSpeakerglobal(namesArr[i]);
  }
}

})();
