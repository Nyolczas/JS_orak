var box = document.getElementById('pelda');

box.onclick = function (){
    setTimeout(setColorToBlue, 2);
    setTimeout(setColorTo2, 1000);
    box.innerHTML = "Szia!";
}


function setColorToBlue() {
    box.style.backgroundColor = 'rgb(0, 0, 255)';
}

function setColorTo2() {
    box.style.backgroundColor = 'rgb(69, 157, 73)';
}

box.onmouseover = function (){
    box.style.backgroundColor = 'rgb(0, 255, 0)';
}

box.onmouseout = function (){
    box.style.backgroundColor = 'rgb(255, 0, 0)';
}

box.ondblclick = function () {
    box.style.borderRadius = '50%';
}

window.onresize = function () {
    console.log('Window resized!');
}
 
var txtinput = document.getElementById('inputmezo');
    
txtinput.onkeydown = function(e) {
    console.log(e.key); //kilogolja a leütött billentyűt
    //console.log('valaki leütött egy billentyűt!');
}

txtinput.onkeydown = function(e) {
   box.innerHTML += e.key;
}

var box2 = document.querySelector('.koordinatak');

window.onmousemove = function(e){
    var xkoordinata = e.clientX;
    var ykoordinata = e.clientY;
    var txt = 'X: ' + xkoordinata + "<br>" + 'Y: ' + ykoordinata;
    box2.innerHTML = txt;
    //console.log(e);
}





