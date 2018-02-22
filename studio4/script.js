"use strict";
console.log("testing");

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

// does same thing as the attribute ondrop="drop(event)"
var div1 = document.querySelector("#div1");
// div1.ondrop = drop;
div1.addEventListener("drop", drop);
div1.addEventListener("dragover", allowDrop);

var drag1 = document.querySelector("#drag1");
drag1.addEventListener("dragstart", drag);


/*
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
