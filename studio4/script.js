"use strict";
console.log("testing");

$("header img").click(function(){
$  (this).fadeTo("slow", 0);
});

var sushiArray = [
  {image: "s1.png"},
  {image: "s2.png"},
  {image: "s3.png"},
  {image: "s4.png"},
  {image: "s5.png"},
  {image: "s6.png"},
  {image: "s7.png"},
  {image: "s8.png"},
  {image: "s9.png"},
  {image: "s10.png"},
  {image: "s11.png"},
  {image: "s12.png"},
]

var img=document.getElementsByTagName("img")[0];

window.addEventListener('resize',function(){
  var i = Math.floor(Math.random()*sushiArray.length);
  imc.src=sushiArray[i];
})
