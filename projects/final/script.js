"use strict";

console.log("hello!");

function showIt () {
  document.getElementById("ingredient").style.visibility = "visible";
}
setTimeout("showIt()", 1500);


/* click function
sushiMain.addEventListener("click", function(){
  ingredient.style.display="block";
    console.log("ingredients are displayed");
});
*/
