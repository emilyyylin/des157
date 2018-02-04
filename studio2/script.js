"use strict";

console.log('reading');

document.addEventListener("DOMContentLoaded", function(event){
  console.log("DOM fully loaded and parsed.");
});

//declares the images in the variables
var bottleH = document.getElementById('bottleH');
var laptopH = document.getElementById('laptopH');
var wasabiH = document.getElementById('wasabiH');

//hover for bottle
bottleH.addEventListener('mouseover', function () {
    bottleH.style.opacity = 1;
    bottleH.src = 'images/bottle.png';
});

bottleH.addEventListener('mouseout', function () {
    bottleH.style.opacity = 1;
    bottleH.src = 'images/bottleH.png';
});

//hover for laptop
laptopH.addEventListener('mouseover', function () {
    laptopH.style.opacity = 1;
    laptopH.src = 'images/laptop.png';
});

laptopH.addEventListener('mouseout', function () {
    laptopH.style.opacity = 1;
    laptopH.src = 'images/laptopH.png';
});

//hover for wasabi
wasabiH.addEventListener('mouseover', function () {
    wasabiH.style.opacity = 1;
    wasabiH.src = 'images/wasabi.png';
});

wasabiH.addEventListener('mouseout', function () {
    wasabiH.style.opacity = 1;
    wasabiH.src = 'images/wasabiH.png';
});
