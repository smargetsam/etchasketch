
for (let i = 0; i < 128; i++) {

var div = document.createElement("div");
div.style.width = "30px";
div.style.height = "30px";
div.style.background = "#D3D3D3";



div.addEventListener("mouseover", function onmouseenter(event) {
    // 👇️ change background color
    event.target.style.backgroundColor = 'black';

    
  
    // 👇️ optionally change text color
    // event.target.style.color = 'white';
  });
  
document.getElementById("main").appendChild(div);
}

var clear = document.getElementById("clear");



