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
    var animal = document.f.animal.value;
    var vehicle = document.f.vehicle.value;
    var yourName = document.f.yourName.value;
    //  console.log(date_time);
    var myMsg=document.getElementById("myMsg");
    //print into message
    myMsg.innerHTML="Dear Professor, <br> On <u>" + day + "</u>, I was in a <u>" + adj1 + "</u> accident; that's why I was late to <u>" + className + "</u>. While I was <u>" + verb1 + "</u> to the <u>" + loca1 + "</u>, a <u>" + vehicle + "</u> knocked me off the ground, and I flew at least 2 feet in front of me. All of my homework scattered, and I saw a <u>" + animal + "</u> eat it. Then the <u>" + vehicle + "</u> also ran over my laptop. That's why I was really late and didn't have my homework. <br> Sorry, <u>" + yourName + "</u>";
    myMsg.className = "show";
return false;
}

//clear clearForm
function clearForm(){
  myMsg.className = "hide";
}
