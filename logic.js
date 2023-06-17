
for (let i = 0; i < 810; i++) {

var div = document.createElement("div");
div.style.width = "10px";
div.style.height = "10px";


div.classList.add("usual-class");




div.addEventListener("mouseover", function onmouseenter(event) {
    // 👇️ change background color
    event.target.style.backgroundColor = 'black';
  });

  
  
document.getElementById("main").appendChild(div);
}


var buton = document.getElementById("clear");
  buton.addEventListener("click", changeColor);

  



  function changeColor(){
  var updatecolor = document.querySelectorAll("div *:not(#outer-box,#main,#panel, #dial1, #dial2,h1)");
  //exclude the div that is the outerbox from undergoing colour change on clear

  for (let i = 0; i < updatecolor.length; i++) {

    updatecolor[i].style.backgroundColor =   "#CBC0C0";
   
  }
  


  

}

 