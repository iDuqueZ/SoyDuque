
var down = document.querySelector(".down");

down.onclick = function () {window.location.href="#about-this"}


var btnMenu = document.querySelector(".btn-menu")

if(btnMenu){
    btnMenu.onclick = function () {
        var menuitems= document.querySelector(".menu-items");
        menuitems.classList.toggle("show")
    }
}



window.onscroll = function() {scrollNavbar()};

function scrollNavbar() {
    console.log("Hola")
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("Navbar").style.backgroundColor= "black";
  } else {
    document.getElementById("Navbar").style.backgroundColor= "transparent";
  }

  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("up").style.opacity= 1;
  } else {
    document.getElementById("up").style.opacity= 0;
  }
}

function up(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}