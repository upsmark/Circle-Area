
function math() {

var radius = document.getElementById('calculate').value;

var msg;

  if (radius > 0) {

   var newRadius = Math.PI*radius*radius;

   msg = "This is the area of your circle " + newRadius.toFixed(2);

} else {

   msg = "Not a valid radius";
}

document.getElementById('valid').innerText = msg;
document.getElementById('newcircle').style.width=(radius*2)+"px";
document.getElementById('newcircle').style.height=(radius*2)+"px";


}
