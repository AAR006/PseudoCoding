var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
//start position
var x = 245
var y = 5

ctx.beginPath();
ctx.rect(5, 245, 10, 10);
ctx.stroke();
console.log("Cube")

function finishLine() {
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(445, 0, 10, 500);
    console.log("Red")
}
finishLine();

document.addEventListener("keydown", KeyPress);
function KeyPress(K) {
    if (K.keyCode === 40) {
        console.log("Arrow Down")
        x += 5
        draw();
    } if (K.keyCode === 38) {
        console.log("Arrow Up")
        x -= 5
        draw();
    } if (K.keyCode === 39) {
        console.log("Arrow Right")
        y += 5
        draw();
    } if (K.keyCode === 37) {
        console.log("Arrow Left")
        y -= 5
        draw();
    }
    console.log(x, y)
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    finishLine();
    ctx.beginPath();
    ctx.rect(y, x, 10, 10);
    ctx.stroke();
}