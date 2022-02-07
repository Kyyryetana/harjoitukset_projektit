const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//Poistaa kaiken
function poista(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//Kynän paksuuden säädin
ctx.lineWidth = 3;
const changeWidth = value => ctx.lineWidth = value;
ctx.lineCap = "round";

//Värin vaihto
const changeColor = color => ctx.strokeStyle = color;

//Piirtäminen
let prevX = null
let prevY = null
let piirto = false
// Piirrä kun hiiren klikkiä painetaan
window.addEventListener("mousedown", (e) => piirto = true)
//Elä piirrä kun hiiren klikkiä ei paina
window.addEventListener("mouseup", (e) => piirto = false)

window.addEventListener("mousemove", (e) => {
    if(prevX == null || prevY == null || !piirto){
        prevX = e.clientX
        prevY = e.clientY
        return
    }
    let currentX = e.clientX
    let currentY = e.clientY

    ctx.beginPath()
    ctx.moveTo(prevX, prevY)
    ctx.lineTo(currentX, currentY)
    ctx.stroke()

    prevX = currentX
    prevY = currentY
})




// var mousePressed = false;
// var lastX, lastY;
// var ctx;
//
// function InitThis() {
//     ctx = document.getElementById('myCanvas').getContext("2d");
//     $('#myCanvas').mousedown(function (e) {
//         mousePressed = true;
//         Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
//     });
//
//     $('#myCanvas').mousemove(function (e) {
//         if (mousePressed) {
//             Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
//         }
//     });
//
//     $('#myCanvas').mouseup(function (e) {
//         if (mousePressed) {
//             mousePressed = false;
//             cPush();
//         }
//     });
//
//     $('#myCanvas').mouseleave(function (e) {
//         if (mousePressed) {
//             mousePressed = false;
//             cPush();
//         }
//     });
//     drawImage();
// }
//
// function drawImage() {
//     var image = new Image();
//     image.src = 'myimg.jpg';
//     $(image).load(function () {
//         ctx.drawImage(image, 0, 0, 500, 200);
//         cPush();
//     });
// }
//
// function Draw(x, y, isDown) {
//     if (isDown) {
//         ctx.beginPath();
//         ctx.strokeStyle = $('#selColor').val();
//         ctx.lineWidth = $('#selWidth').val();
//         ctx.lineJoin = "round";
//         ctx.moveTo(lastX, lastY);
//         ctx.lineTo(x, y);
//         ctx.closePath();
//         ctx.stroke();
//     }
//     lastX = x;
//     lastY = y;
// }
//
// var cPushArray = new Array();
// var cStep = -1;
//
// function cPush() {
//     cStep++;
//     if (cStep < cPushArray.length) { cPushArray.length = cStep; }
//     cPushArray.push(document.getElementById('myCanvas').toDataURL());
//     document.title = cStep + ":" + cPushArray.length;
// }
// function cUndo() {
//     if (cStep > 0) {
//         cStep--;
//         var canvasPic = new Image();
//         canvasPic.src = cPushArray[cStep];
//         canvasPic.onload = function () { ctx.drawImage(canvasPic, 0, 0); }
//         document.title = cStep + ":" + cPushArray.length;
//     }
// }
// function cRedo() {
//     if (cStep < cPushArray.length-1) {
//         cStep++;
//         var canvasPic = new Image();
//         canvasPic.src = cPushArray[cStep];
//         canvasPic.onload = function () { ctx.drawImage(canvasPic, 0, 0); }
//         document.title = cStep + ":" + cPushArray.length;
//     }
// }
