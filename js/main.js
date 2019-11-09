//Button
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


//Get DateTime
let date = new Date();  
let options = {  
    weekday: "long", year: "numeric", month: "short",  
    day: "numeric", hour: "2-digit", minute: "2-digit"  
};  

document.getElementById("DateTime").innerHTML = date.toLocaleTimeString("en-us", options);   


function validateForm() {
  var emailID = document.contact.email.value;
  atpos = emailID.indexOf("@");
  dotpos = emailID.lastIndexOf(".");

  if( document.contact.name.value == "" ) {
     document.forms["contact"]["name"].style.border = "1px solid red";
     document.getElementById("namemsg").innerHTML = "Please provide your name!";
     document.contact.name.focus() ;
     return false;
  }

  if (atpos < 1 || ( dotpos - atpos < 2 )) {
    document.forms["contact"]["email"].style.border = "1px solid red";
    document.getElementById("emailmsg").innerHTML = "Please enter correct email!";
    document.contact.email.focus() ;
    return false;
  }

  if( document.contact.message.value == "" ) {
     document.forms["contact"]["text"].style.border = "1px solid red";
     document.getElementById("textmsg").innerHTML = "Please provide your message!";
     document.contact.message.focus() ;
     return false;
  }
  return( true );
};