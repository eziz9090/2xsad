/*
    Code sample for SITE 1101 Principles of Information Systems 
    (c)2024 by Araz Yusubov 
    DISCLAIMER: All code examples we will look at are quick hacks intended to present working prototypes.
    Hence they do not follow best practice of programming or software engineering.    
*/

// Global variables for Artist's position and orientation
var x, y;
var angle;

function radian(degree) {
    return degree * Math.PI / 180;
}

function moveForward(distance, context) {
    let a = radian(angle);
    x = x + distance * Math.cos(a);
    y = y + distance * Math.sin(a);
    context.lineTo(x, y);    
}

function turnRight(degree) {
    angle = angle - degree;
    if (angle < 0) angle = angle + 360;
}

function turnLeft(degree) {
    angle = angle + degree;
    if (angle > 360) angle = angle - 360;
}

function DrawSpiral(context) {
    // Inspired by Express Course (2024) Lesson 29: For Loops with Artist
    // https://studio.code.org/s/express-2024/lessons/29/levels/5

    // The initial position is in the center of the canvas
    x = context.canvas.width / 2;
    y = context.canvas.height / 2;
    // The initial orientation is zero degrees i.e. facing East
    angle = 0.0; 
    context.moveTo(x, y);
    context.beginPath();
    for (let counter = 3; counter < 600; counter += 3) {
        moveForward(counter, context);
        context.stroke();
        turnRight(170);
    }
}











let slideIndex = 1;
let slideInterval;


window.onload = function() {
    showSlides(slideIndex);  // when the page loads ->> show first slide
    startTimer();
  };
  
function plusSlides(n) {
  showSlides(slideIndex += n);
  resetTimer(); 
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  resetTimer();
}


function showSlides(n) {
 
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

function startTimer() {
  slideInterval = setInterval(() => {
    showSlides(slideIndex += 1);
  }, 3000); // Change every3seconds
}
function resetTimer() {
  // Clear the  interval 
  clearInterval(slideInterval);
  startTimer();
}

window.addEventListener('load', function() {
  setTimeout(function() {
    document.querySelector('header').classList.add('hover-active');
    document.querySelector('header').style.pointerEvents = 'auto';
  }, 2600); 
});

window.addEventListener('load', function() {
  setTimeout(function() {
    document.querySelector('.inst-icon').classList.add('hover-active');
    document.querySelector('.inst-icon').style.pointerEvents = 'auto';
  }, 2600); 
});

window.addEventListener('load', function() {
  setTimeout(function() {
    document.querySelector('.youtube-icon').classList.add('hover-active');
    document.querySelector('.youtube-icon').style.pointerEvents = 'auto';
  }, 2600); 
});

