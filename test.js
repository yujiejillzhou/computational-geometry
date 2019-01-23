var canvas = document.getElementById("1stCanvas");
var rect = canvas.getBoundingClientRect();
var points = new Array();


canvas.addEventListener('click', getPosition,false);     


function getPosition(event){
  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;
  drawCoordinates(x,y);
}

function drawCoordinates(x,y){
  points.push([x,y]);
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#000000";
  ctx.beginPath();
  ctx.arc(x,y,3,0,Math.PI*2);
  ctx.fill();
  console.log(points[points.length-1],points.length);
}

function drawTriangles(tri){
    var ctx = canvas.getContext("2d");
    var i,j;
    for( i=0; i<tri.length; i++){
        for(j=0; j<2;j++){
            ctx.moveTo(tri[i][j][0],tri[i][j][1]);
            ctx.lineTo(tri[i][j+1][0],tri[i][j+1][1]);
            ctx.stroke();
        }

    }


}





