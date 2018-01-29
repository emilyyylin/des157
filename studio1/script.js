console.log('reading');

// capture the submit event
document.f.onsubmit = processForm;
document.f.onreset = clearForm;
console.log("youre outside of processForm")
// define process function
function processForm() {
    console.log("you're inside processForm");
    // store form fields in variables
    var day = document.f.day.value;
    var adj1 = document.f.adj1.value;
    var className = document.f.className.value;
    var verb1 = document.f.verb1.value;
    var loca1 = document.f.loca1.value;
    var vehicle = document.f.vehicle.value;
  //  console.log(date_time);
    var myMsg=document.getElementById("myMsg");

    //print into message
    myMsg.innerHTML="Dear Professor, <br> On <em>" + day + "</em>, I was in a <em>" + adj1 + "</em> accident; that's why I was late to <em>" + className + "</em>. While I was <em>" + verb1 + "</em> to the<em>" + loca1 + "</em> ,a <em>" + vehicle + "</em> knocked me off the ground, and I flew at least 2 feet in front of me.";

    myMsg.className = "show";

return false;
}

//clear clearForm
function clearForm(){
  myMsg.className = "hide";
}
