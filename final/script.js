"use strict";

console.log("hello!");

var salmon = document.getElementById('salmon');
var tuna = document.getElementById('tuna');

console.log("done with vars");

//INGREDIENTS---------------------------------------------
salmon.addEventListener("click", function(){
  salmonInfo.style.display="block";
});

tuna.addEventListener('click', function(){
  tunaInfo.style.display="block";
})
