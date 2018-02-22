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

var sushiArray1 = new Array("images/s1.svg","images/s2.svg","images/s3.svg","images/s4.svg","images/s5.svg","images/s6.svg", "images/s7.svg","images/s8.svg","images/s9.svg","images/s10.svg","images/s11.svg","images/s12.svg");

var sushiArray2 = new Array("images/s7.svg","images/s8.svg","images/s9.svg","images/s10.svg","images/s11.svg","images/s12.svg");

var sushiArray3 = new Array("images/s1.svg","images/s2.svg","images/s3.svg","images/s4.svg","images/s5.svg","images/s6.svg", "images/s7.svg","images/s8.svg","images/s9.svg","images/s10.svg","images/s11.svg","images/s12.svg");

function choosePic() {
        console.log("inside choosePic");
     var randomNum = Math.floor(Math.random() * sushiArray1.length);
     document.getElementById("sushiTime").src = sushiArray1[randomNum];
         console.log("sushiArray1 is working");

     var randomNum2 = Math.floor(Math.random() * sushiArray2.length);
     document.getElementById("sushiTime2").src = sushiArray2[randomNum2];
         console.log("sushiArray2 is working");

     var randomNum3 = Math.floor(Math.random() * sushiArray3.length);
     document.getElementById("sushiTime3").src = sushiArray3[randomNum2];
         console.log("sushiArray3 is working");
   };
