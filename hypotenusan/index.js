//Räkna ut hypotenusan* 
//* den sneda sidan i en rätvinklig triangel
//* Man räknar ut LÄNGDEN på den sidan.

let a;
let b;
let C;

document.getElementById("submitButton").onclick = function(){
    a = document.getElementById("aSideInput").value;
    a = Number(a);

    b = document.getElementById("bSideInput").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("cSide").innerHTML = "side C: " + c;
};
