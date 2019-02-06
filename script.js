var i = 0;
var txt = 'Welcome to my portfolio! I\'m Andrew, a fullstack developer.'; /* The text */
var speed = 30; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById(`welcome`).innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

$(typeWriter);