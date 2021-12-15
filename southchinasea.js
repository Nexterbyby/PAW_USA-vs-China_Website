window.onload = typeWriter;

var i = 0;
var j = 0;
var k = 0;
var txt = "South";
var txt2 = "China";
var txt3 = "Sea";
var speed = 80; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("heading1").innerHTML += txt.charAt(i);
    i++;
  }
  if (j < txt2.length) {
    document.getElementById("heading2").innerHTML += txt2.charAt(j);
    j++;
  }
  if (k < txt3.length) {
    document.getElementById("heading3").innerHTML += txt3.charAt(k);
    k++;
  }
  setTimeout(typeWriter, speed);
}