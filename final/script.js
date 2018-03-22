"use strict";

console.log("hello!");

//DECLARING VARIABLES-----------------------------------------------
var nigiri = document.getElementById('nigiri');
var nigiriClose = document.getElementById('nigiriClose')
var sashimi = document.getElementById('sashimi');
var sashimiClose = document.getElementById("sashimiClose");
var maki = document.getElementById('maki');
var makiClose = document.getElementById('makiClose');
var uramaki = document.getElementById('uramaki');
var uramakiClose = document.getElementById('uramakiClose');
var temaki = document.getElementById('temaki');
var temakiClose = document.getElementById('temakiClose');

var sushiMain = document.getElementById('sushiMain');
var close = document.getElementById("close");

//INGREDIENTS--------------------------------------------------
sushiMain.addEventListener("click", function(){
  ingredient.style.display="block";
    console.log("ingredients are displayed");
});

close.addEventListener("click", function(){
  ingredient.style.display="none";
});

//NIGIRI INFO--------------------------------------------
nigiri.addEventListener("click", function(){
  nigiriInfo.style.display="block";
});

nigiriClose.addEventListener('click', function(){
  nigiriInfo.style.display='none';
});

//SASHIMI INFO--------------------------------------------
sashimi.addEventListener("click", function(){
  sashimiInfo.style.display="block";
});

sashimiClose.addEventListener('click', function(){
  sashimiInfo.style.display='none';
});

//MAKI INFO--------------------------------------------
maki.addEventListener("click", function(){
  makiInfo.style.display="block";
});

makiClose.addEventListener('click', function(){
  makiInfo.style.display='none';
});

//URAMAKI INFO--------------------------------------------
uramaki.addEventListener("click", function(){
  uramakiInfo.style.display="block";
});

uramakiClose.addEventListener('click', function(){
  uramakiInfo.style.display='none';
});

//TEMAKI INFO--------------------------------------------
temaki.addEventListener("click", function(){
  temakiInfo.style.display="block";
});

temakiClose.addEventListener('click', function(){
  temakiInfo.style.display='none';
});
