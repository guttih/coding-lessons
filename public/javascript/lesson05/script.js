

function wipe() {
    document.getElementById("tala1").value="";
    document.getElementById("tala2").value="";
    document.getElementById("utkoma").value="";
}

function add() {
    var t1 = document.getElementById("tala1").value;
    var t2 = document.getElementById("tala2").value;
    var utkoma = Number (t1) + t2;
    document.getElementById("utkoma").value=utkoma;
}

function subtract() {
    var t1 = document.getElementById("tala1").value;
    var t2 = document.getElementById("tala2").value;
    var utkoma = Number (t1) - t2;
    document.getElementById("utkoma").value=utkoma;
}

function multiply() {
    var t1 = document.getElementById("tala1").value;
    var t2 = document.getElementById("tala2").value;
    var utkoma = Number (t1) * t2;
    document.getElementById("utkoma").value=utkoma;
}

function devide() {
    var t1 = document.getElementById("tala1").value;
    var t2 = document.getElementById("tala2").value;
    var utkoma = Number (t1) / t2;
    document.getElementById("utkoma").value=utkoma;
}