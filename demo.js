"use strict";
exports.__esModule = true;
function demo() {
    console.log("abc");
    var a = document.getElementById("min");
    var min = Number(a.value);
    var b = document.getElementById("max");
    var max = Number(b.value);
    var result = Math.floor(Math.random() * (max - min + 1)) + min;
    var output = document.getElementById("result");
    output.innerHTML = String(result);
}
