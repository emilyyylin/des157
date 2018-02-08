"use strict";

console.log('reading');

document.addEventListener("DOMContentLoaded", function(event){
  console.log("DOM fully loaded and parsed.");
});

//DECLARING VARIABLES-----------------------------------------------------------
var items = document.getElementById('items');
var bottleH = document.getElementById('bottleH');
var laptopH = document.getElementById('laptopH');
var wasabiH = document.getElementById('wasabiH');
var fivehrH = document.getElementById('fivehrH');
var tissueH = document.getElementById('tissueH');
var bottleClose = document.getElementById('bottleClose');
var laptopClose = document.getElementById('laptopClose');
var wasabiClose = document.getElementById('wasabiClose');
var fivehrClose = document.getElementById('fivehrClose');
var tissueClose = document.getElementById('tissueClose');


//BOTTLE HOVER------------------------------------------------------------------
bottleH.addEventListener('mouseover', function () {
    bottleH.style.opacity = 1;
    bottleH.src = 'images/bottle.png';
});

bottleH.addEventListener('mouseout', function () {
    bottleH.style.opacity = 1;
    bottleH.src = 'images/bottleH.png';
});

//BOTTLE INFORMATION------------------------------------------------------------
bottleH.addEventListener("click", function(){
  bottleInfo.style.display="block";
});

bottleClose.addEventListener('click', function(){
  bottleInfo.style.display='none';
});

//WASABI HOVER------------------------------------------------------------------
wasabiH.addEventListener('mouseover', function(){
  wasabiH.style.opacity = 1;
  wasabiH.src = 'images/wasabi.png';
});

wasabiH.addEventListener('mouseout', function () {
    wasabiH.style.opacity = 1;
    wasabiH.src = 'images/wasabiH.png';
});

//WASABI INFORMATION------------------------------------------------------------
wasabiH.addEventListener("click", function(){
  wasabiInfo.style.display="block";
});

wasabiClose.addEventListener('click', function(){
  wasabiInfo.style.display='none';
});

//5HR HOVER---------------------------------------------------------------------
fivehrH.addEventListener('mouseover', function () {
    fivehrH.style.opacity = 1;
    fivehrH.src = 'images/fivehr.png';
});

fivehrH.addEventListener('mouseout', function () {
    fivehrH.style.opacity = 1;
    fivehrH.src = 'images/fivehrH.png';
});

//5HR INFORMATION---------------------------------------------------------------
fivehrH.addEventListener("click", function(){
  fivehrInfo.style.display="block";
});

fivehrClose.addEventListener('click', function(){
  fivehrInfo.style.display='none';
});

//LAPTOP HOVER------------------------------------------------------------------
laptopH.addEventListener('mouseover', function () {
    laptopH.style.opacity = 1;
    laptopH.src = 'images/laptop.png';
});

laptopH.addEventListener('mouseout', function () {
    laptopH.style.opacity = 1;
    laptopH.src = 'images/laptopH.png';
});

//LAPTOP INFORMATION------------------------------------------------------------
laptopH.addEventListener("click", function(){
  laptopInfo.style.display="block";
});

laptopClose.addEventListener('click', function(){
  laptopInfo.style.display='none';
});

//TISSUE HOVER------------------------------------------------------------------
tissueH.addEventListener('mouseover', function () {
    tissueH.style.opacity = 1;
    tissueH.src = 'images/tissue.png';
});

tissueH.addEventListener('mouseout', function () {
    tissueH.style.opacity = 1;
    tissueH.src = 'images/tissueH.png';
});

//TISSUE INFORMATION------------------------------------------------------------
tissueH.addEventListener("click", function(){
  tissueInfo.style.display="block";
});

tissueClose.addEventListener('click', function(){
  tissueInfo.style.display='none';
});
