boolean voiceUpdated = false;
window.speechSynthesis.onvoiceschanged = function() {
  if(voiceUpdated == false) {
    var voices = window.speechSynthesis.getVoices();
    //var options = document.getElementById("voiceComboBox").options;
    for(var i = 0; i < voices.length; i++) {
      
      var option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
    
      if(voices[i].default) {
        option.textContent = 'Default voice (native)';
      }
      
      option.value = i;
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      
      document.getElementById("voiceComboBox").appendChild(option);
    }   
    voiceUpdated = true;
  }
};

function oodlise(form) {
  var input1 = form.inputText.value;
  var input2 = input1.replace(/[aeiou]/g, "oodle");
  var input3 = input2.replace(/[AEIOU]/g, "Oodle");
  form.outputText.value = input3;
}

function speak(form) {
  var msg = new SpeechSynthesisUtterance();
  var voices = window.speechSynthesis.getVoices();
  msg.voice = voices[parseInt(form.voice.value)]; // Note: some voices don't support altering params
  msg.voiceURI = 'native';
  msg.volume = 1; // 0 to 1
  msg.rate = 1; // 0.1 to 10
  msg.pitch = 1; //0 to 2
  msg.text = form.outputText.value;
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}
