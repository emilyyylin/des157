"use strict";
console.log("testing");

/*var sushiArray = [
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
]*/

window.onclick = choosePic;

var sushiArray1 = new Array("images/s1.png","images/s2.png","images/s3.png","images/s4.png","images/s5.png","images/s6.png");

var sushiArray2 = new Array("images/s7.png","images/s8.png","images/s9.png","images/s10.png","images/s11.png","images/s12.png");

function choosePic() {
        console.log("inside choosePic");
     var randomNum = Math.floor(Math.random() * sushiArray1.length);
     document.getElementById("sushiTime").src = sushiArray1[randomNum];
         console.log("sushiArray1 is working");

     var randomNum2 = Math.floor(Math.random() * sushiArray2.length);
     document.getElementById("sushiTime2").src = sushiArray2[randomNum2];
         console.log("sushiArray2 is working");
   }
