"use strict";

console.log('reading');

document.addEventListener("DOMContentLoaded", function(event){
  console.log("DOM fully loaded and parsed.");
});

//declares the images in the variables
var bottleH = document.getElementById('bottleH');
var laptopH = document.getElementById('laptopH');
var wasabiH = document.getElementById('wasabiH');

bottleH.addEventListener('mouseover', function () {
    bottleH.style.opacity = 1;
    bottleH.src = 'images/bottle.png';
});

bottleH.addEventListener('mouseout', function () {
    bottleH.style.opacity = 1;
    bottleH.src = 'images/bottleH.png';
});
