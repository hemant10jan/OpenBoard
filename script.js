let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");
let rect = document.querySelector("#rect");
let line = document.querySelector("#line");
let options = document.querySelectorAll(".sizeBox");
let cTool = "pencil";
pencil.addEventListener("click", function () {
    if (cTool == "pencil") {
        options[0].style.display = "flex";
    }
    else {
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        // pencil.style.border="1px solid gray";
        // tool.strokeStyle="black";
        cTool = "pencil";
        tool.strokeStyle = "red";
        tool.lineWidth = 2;
    }
});
eraser.addEventListener("click", function () {
    if (cTool == "eraser") {
        options[1].style.display = "flex";
    }
    else {
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        // eraser.style.border="1px solid gray";
        tool.strokeStyle = "white";
        cTool = "eraser";
        tool.lineWidth = 2;
    }
});
rect.addEventListener("click", function () {
    if (cTool == "rect") {
        options[2].style.display = "flex";
    }
    else {
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        // rect.style.border="1px solid gray";
        //tool.strokeStyle="black";
        cTool = "rect";
        tool.lineWidth = 2;
        tool.strokeStyle = "red";
    }
});
line.addEventListener("click", function () {
    if (cTool == "line") {
        options[3].style.display = "flex";
    }
    else {
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        // line.style.border="1px solid gray";
        //tool.strokeStyle="black";
        cTool = "line";
        tool.lineWidth = 2;
        tool.strokeStyle = "red";
    }
});

let pencilSize = 5;
let eraserSize = 5;
let rectSize = 5;
let lineSize = 5;
let sizeBox = document.querySelectorAll(".sizeBox");
sizeBox[0].addEventListener("click", function (e) {
    let ele = ["size1", "size2", "size3", "size4"];
    let allTheClasses = e.target.classList;
    let first = allTheClasses[0];
    let test = ele.includes(first);
    if (test) {
        if (first == "size1") {
            pencilSize = 5;
        }
        else if (first == "size2") {
            pencilSize = 10;
        }
        else if (first == "size3") {
            pencilSize = 15;
        }
        else {
            pencilSize = 20;
        }
        tool.lineWidth = pencilSize;
    }
});
sizeBox[1].addEventListener("click", function (e) {
    let ele = ["size1", "size2", "size3", "size4"];
    let allTheClasses = e.target.classList;
    let first = allTheClasses[0];
    let test = ele.includes(first);
    if (test) {
        if (first == "size1") {
            eraserSize = 5;
        }
        else if (first = "size2") {
            eraserSize = 10;
        }
        else if (first == "size3") {
            eraserSize = 15;
        }
        else {
            eraserSize = 20;
        }
        tool.lineWidth = eraserSize;
    }
});
sizeBox[2].addEventListener("click", function (e) {
    let ele = ["size1", "size2", "size3", "size4"];
    let allTheClasses = e.target.classList;
    let first = allTheClasses[0];
    let test = ele.includes(first);
    if (test) {
        if (first == "size1") {
            rectSize = 5;
        }
        else if (first = "size2") {
            rectSize = 10;
        }
        else if (first == "size3") {
            rectSize = 15;
        }
        else {
            rectSize = 20;
        }
        tool.lineWidth = rectSize;
    }
});
sizeBox[3].addEventListener("click", function (e) {
    let ele = ["size1", "size2", "size3", "size4"];
    let allTheClasses = e.target.classList;
    let first = allTheClasses[0];
    let test = ele.includes(first);
    if (test) {
        if (first == "size1") {
            lineSize = 5;
        }
        else if (first = "size2") {
            lineSize = 10;
        }
        else if (first == "size3") {
            lineSize = 15;
        }
        else {
            lineSize = 20;
        }
        tool.lineWidth = lineSize;
    }
});

// mouse is pressed
let body = document.querySelector("body");
let canvasBoard = document.querySelector("canvas");
canvasBoard.height = window.innerHeight; // window is a tab
canvasBoard.width = window.innerWidth; // window is a tab
let boardTop = canvasBoard.getBoundingClientRect().top;
let boardLeft = canvasBoard.getBoundingClientRect().left;
let tool = canvasBoard.getContext("2d");
tool.strokeStyle = "red";
let sx, sy, fx, fy;
//let currentTool="rect";
body.addEventListener("mousedown", function (e) {
    sx = e.clientX + boardLeft;
    sy = e.clientY - boardTop;
    if (cTool == "pencil" || cTool == "eraser") {
        tool.beginPath();
        tool.moveTo(sx, sy);
        drawingMode = true;
    }
});
// mouse is lifted
let drawingMode = false;
body.addEventListener("mouseup", function (e) {
    fx = e.clientX + boardLeft;
    fy = e.clientY - boardTop;

    let width = fx - sx;
    let height = fy - sy;
    if (cTool == "pencil" || cTool == "eraser") {
        drawingMode = false;
    }
    else if (cTool == "rect") {
        tool.strokeRect(sx, sy, width, height);
    }
    else {
        tool.beginPath();
        tool.moveTo(sx, sy);
        tool.lineTo(fx, fy);
        tool.stroke();
    }
});
body.addEventListener("mousemove", function (e) {
    if (drawingMode == false) {
        return;
    }
    fx = e.clientX + boardLeft;
    fy = e.clientY - boardTop;
    tool.lineTo(fx, fy);
    tool.stroke();
    sx = fx;
    sy = fy;
});

let red = document.querySelector("#red");
let green = document.querySelector("#green");
let yellow = document.querySelector("#yellow");

red.addEventListener("click", function () {
    tool.strokeStyle = "red";
});
green.addEventListener("click", function () {
    tool.strokeStyle = "green";
});
yellow.addEventListener("click", function () {
    tool.strokeStyle = "yellow";
});


let btn = document.querySelector("#sticky");
btn.addEventListener("click", function () {
    let sticky = document.createElement("sticky");
    sticky.setAttribute("class", "sticky");
    sticky.innerHTML = ` 
        <div class="sticky">
    <div class="navbar">
        <div class="close"></div>
        <div class="minimise"></div>
    </div>
    <textarea name="" class="textarea"></textarea>
</div>`
    body.appendChild(sticky);

    let text = sticky.querySelector(".textarea");
    let mini = sticky.querySelector(".minimise");
    let close = sticky.querySelector(".close")
    let isClosed = false;
    mini.addEventListener("click", function () {
        if (!isClosed) {
            text.style.display = "none";
            isClosed = true;
        }
        else {
            text.style.display = "block";
            isClosed = false;
        }
    });
    close.addEventListener("click", function () {
        sticky.remove();
    });
});