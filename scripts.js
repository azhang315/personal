function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
  }




window.onscroll = function() {stickyobj()};

var navbar = document.getElementById("nav");

var body = document.body,
    html = document.documentElement;
var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

var sticky = navbar.offsetTop;
var sticky2 = height - screen.height - 300;

function stickyobj() {
  navbar.classList.remove("sticky2");
  if (window.pageYOffset >= sticky /* && window.pageYOffset <= sticky2*/) {
    navbar.classList.add("sticky");
  } 
  else {
    navbar.classList.remove("sticky");
  }
  /*
  if (window.pageYOffset > sticky2) {

    navbar.classList.add("sticky2");

    var sticky_scroll = sticky2 - sticky;
    navbar.style.top = sticky_scroll +  "px";
  }
  else {
    navbar.classList.remove("sticky2");
  }
  */
} 