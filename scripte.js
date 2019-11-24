var brush = document.getElementById("brush"),
    eraser = document.getElementById("eraser"),
    stats = "",
    table = document.getElementById("canvas"),
    color = "";

document.body.onmousedown = function () {
    if(stats != "clear") {
        stats = "clicked";
        color = document.querySelector(".panel span input").value;
    }
    console.log(stats);
}

document.body.onmouseup = function () {
    if(stats != "clear") {
        stats = "";
    }
    console.log(stats);

}

eraser.onclick = function () {
    if(stats == "clear")
        stats = "";
    else stats = "clear";
    eraser.classList.toggle("active");
    console.log(stats);
}

var height = window.innerHeight / 5;
var width = window.innerWidth / 5;
for(var i = 0; i <= height; i++) {
    var tr = document.createElement("tr");
    table.appendChild(tr);
    for(var j = 0; j <= width; j++) {
        var row = i;
        var col = j;
        var td = document.createElement("td");
        td.setAttribute("data-row", row);
        td.setAttribute("data-col", col);
        td.setAttribute("onmouseover", "draw("+ 
        
        row + "," + col +")")
        tr.appendChild(td);
    }
}

function draw (row, col) {
    var ele = document.querySelector("[data-row='" + row + "'][data-col='" + col + "']");
    if(stats == "clicked") {
        ele.setAttribute("style", "background-color: "+ color +"")
    } else if (stats == "clear") {
        ele.setAttribute("style", "background-color: #fff")
    }
}