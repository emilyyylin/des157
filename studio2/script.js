"use strict";

console.log('reading');

document.addEventListener("DOMContentLoaded", function(event){
  console.log("DOM fully loaded and parsed.");
});

//declares the images in the variables
var bottleH = document.getElementById('bottleH');
var laptopH = document.getElementById('laptopH');
var wasabiH = document.getElementById('wasabiH');
var close1=document.getElementById('close1');
var close2=document.getElementById('close2');
var close3=document.getElementById('close3');
var close4=document.getElementById('close4');
var close5=document.getElementById('close5');


//hover for bottle
bottleH.addEventListener('mouseover', function () {
    bottleH.style.opacity = 1;
    bottleH.src = 'images/bottle.png';
});

bottleH.addEventListener('mouseout', function () {
    bottleH.style.opacity = 1;
    bottleH.src = 'images/bottleH.png';
});

//bottle info
bottleH.addEventListener('click', function() {
  bottleInfo.style.opacity=1;
});

close1.addEventListener('click', function () {
  bottleInfo.style.opacity=0;
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

//wasabi info
wasabiH.addEventListener('click', function() {
  wasabiInfo.style.opacity=1;
});

close2.addEventListener('click', function () {
  wasabiInfo.style.opacity=0;
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

//laptop info
laptopH.addEventListener('click', function() {
  laptopInfo.style.opacity=1;
});

close3.addEventListener('click', function () {
  laptopInfo.style.opacity=0;
});

//hover for 5hr energy
fivehrH.addEventListener('mouseover', function () {
    fivehrH.style.opacity = 1;
    fivehrH.src = 'images/fivehr.png';
});

fivehrH.addEventListener('mouseout', function () {
    fivehrH.style.opacity = 1;
    fivehrH.src = 'images/fivehrH.png';
});

//5hr info
fivehrH.addEventListener('click', function() {
  fivehrInfo.style.opacity=1;
});

close4.addEventListener('click', function () {
  fivehrInfo.style.opacity=0;
});

//hover for tissue
tissueH.addEventListener('mouseover', function () {
    tissueH.style.opacity = 1;
    tissueH.src = 'images/tissue.png';
});

tissueH.addEventListener('mouseout', function () {
    tissueH.style.opacity = 1;
    tissueH.src = 'images/tissueH.png';
});

//tissue info
tissueH.addEventListener('click', function() {
  tissueInfo.style.opacity=1;
});

close5.addEventListener('click', function () {
  tissueInfo.style.opacity=0;
});
