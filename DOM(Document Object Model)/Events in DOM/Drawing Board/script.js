const canvas = document.getElementById("drawCanvas");
const ctx = canvas.getContext("2d");

const clearBtn = document.getElementById("clearBtn");
const brushSize = document.getElementById("brushSize");
const colorPicker = document.getElementById("colorPicker");

//for the canvas size ---------------------------
function resizeCanvas() {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    ctx.lineCap = "round";
    ctx.lineJoin = "round";
}

resizeCanvas();

//for the brush setting ------------------------------
ctx.strokeStyle = colorPicker.value;
ctx.lineWidth = brushSize.value;
// ctx.setLineDash([3, 12]);

let drawing = false;

function startDraw(e) {
    drawing = true;

    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
}

function draw(e) {
    if (!drawing) return;

    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
}

function stopDraw() {
    drawing = false;
    ctx.beginPath();
}

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDraw);
canvas.addEventListener("mouseleave", stopDraw);

//to clear canvas -------------------------
clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

//for changing the brush size -------------------------
brushSize.addEventListener("input", () => {
    ctx.lineWidth = brushSize.value;
});

//to change the color ------------------------------
colorPicker.addEventListener("input", () => {
    ctx.strokeStyle = colorPicker.value;
});