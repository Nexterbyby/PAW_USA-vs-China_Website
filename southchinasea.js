window.onload = typeWriter;

var i = 0;
var txt = 'South China Sea'; 
var speed = 80; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("heading").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}