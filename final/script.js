"use strict";

console.log("hello!");

//DECLARING VARIABLES-----------------------------------------------
var nigiri = document.getElementById('nigiri');
var nigiriClose = document.getElementById('nigiriClose')
var sashimi = document.getElementById('sashimi');
var maki = document.getElementById('maki');
var uramaki = document.getElementById('uramaki');
var temaki = document.getElementById('temaki');
var sushiMain =document.getElementById('sushiMain');


//INGREDIENTS--------------------------------------------------
sushiMain.addEventListener('click', function(){
  ingredient.style.display="block";
  console.log("ingredients are displayed");
});

//NIGIRI INFO--------------------------------------------
nigiri.addEventListener("click", function(){
  nigiriInfo.style.display="block";
});

nigiriClose.addEventListener('click', function(){
  nigiriInfo.style.display='none';
});
