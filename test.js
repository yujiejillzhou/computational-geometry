
var canvas = document.getElementById("1stCanvas");
var rect = canvas.getBoundingClientRect();
canvas.addEventListener('click', getPosition,false);     
canvas.addEventListener('ondrag', Drag, false);

function getPosition(event){
  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;
  drawCoordinates(x,y);
}

function drawCoordinates(x,y){
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#000000";
  ctx.beginPath();
  ctx.arc(x,y,3,0,Math.PI*2);
  ctx.fill();
}

function Drag(event){
  console.log("1");

}
