function myFunction() {
   document.getElementById("demo").innerHTML = "Paragraph changed.";
}

function myFunction2() {
   document.getElementById("demo2").innerHTML = "Paragraph 2 changed.";
}

function alertFunction () {
  alert("I am an alert box!");
}

function confirmFunction () {
  var txt;
  if (confirm("OK or cancel, motherfucker?")) {
    txt = "Is all good, baby babeey!";
    document.getElementById("demo").innerHTML = txt;
} else {
    txt = "You slowly die, fucker. FUCK YOU!";
    document.getElementById("demo").innerHTML = txt;
}
}

function nameFunction(){
var person = prompt("Please enter your name", "Harry Potter");

if (person == null || person == "") {
    txt = "User cancelled the prompt.";
} else {
    txt = "Hello " + person + "! How are you today?";
}
}


function nameFunction() {
  var txt;
  var person = prompt("Input your name, pleb...", "Bitconnect");
  if (person == null || person == ""){
    txt = "Somehow, the user fucked up the prompt somehow.";
  } else {
  txt = "Hello " + person + "! How are you, gentlemen?";
  }
  document.getElementById("demo").innerHTML = txt;
}
