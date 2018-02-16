"use strict";
console.log("testing");

var layover = document.getElementByID('layover');

layover.addEventListener('click', function(){
  console.log(insideLayover);
  if(layover.src=="https://emilyyylin.github.io/des157/studio4/images/layover.jpg"){
    layover.src=="https://emilyyylin.github.io/des157/studio4/images/background.jpg";
  } else {
    layover.src=="https://emilyyylin.github.io/des157/studio4/images/layover.jpg";
  }
});
