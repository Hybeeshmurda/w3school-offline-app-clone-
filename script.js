alert("welcome to w3schools.com");

var mode =document.getElementById("mode");
mode.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        mode.src ="702471.png";
    }
    else{
        mode.src="3258077.png";
    }}
    
;
  creole.onclick = function(){
     var creole = document.getElementById("creole").innerHTML = "Hello Dolly.";

  }
  
