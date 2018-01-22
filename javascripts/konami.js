/* Konami Code!! https://stackoverflow.com/a/31627191/4779071 */
// a key map of allowed keys
var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

var activated = false;

// the 'official' Konami Code sequence
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the konami code
  var requiredKey = konamiCode[konamiCodePosition];

  // compare the key with the required key
  if (key == requiredKey) {

    // move to the next key in the konami code sequence
    konamiCodePosition++;

    // if the last key is reached, activate cheats
    if (konamiCodePosition == konamiCode.length) {
      activateCheats();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});

function update(event) {
	var secret = document.getElementById('secret').value;
	document.getElementById('ooodlizeButton').value = secret.charAt(0).toUpperCase() + secret.slice(1) + "-ize!";
	if (event.keyCode == 13) document.getElementById('ooodlizeButton').click();
}

function activateCheats() {
	if(activated == false) {
		activated = true;
	} else {
		return;
	}
	//Create our extra element:
	var div = document.createElement('div');
	div.innerHTML = '<label for="description">Enter a replacement for oodle</label><input class="form-control" type="text" id="secret" name="secret"  onkeyup = "update(event)"/>';
	div.className = 'form-group';
	
	var oodleInput = document.getElementById("oodleInput");
	oodleInput.appendChild(div);
}