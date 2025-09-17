// Typing effect for welcome text
const text = "Welcome to the RE★LLIFE Movement";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}

window.onload = typeEffect;
