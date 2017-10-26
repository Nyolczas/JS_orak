var shape = document.getElementById('shape');
var startime;

shape.onclick = function () {
    var endTime = new Date().getTime();
    var TimeTaken = (endTime- startime) / 1000;
    hideShapeElement();
    setTimeout(displayShapeElement(), getRandomTimeInterval());
    //console.log(TimeTaken);
    document.getElementById('timeTaken').innerHTML = TimeTaken + ' másodperc';
}

window.onload = function () {
    hideShapeElement();
    setTimeout(displayShapeElement(), getRandomTimeInterval());
}

function displayShapeElement() {
    changeShapeBorderRadius(shape);
    var siz = changeShapeSize(shape);
    randomPos(shape,siz);
    changeColor(shape);
    shape.style.display = 'block';
    startime = new Date().getTime();
    }

function changeShapeBorderRadius(elem) {
    var randomNr = Math.random();
    if (randomNr > 0.5) {
        //console.log('négyzet');
        elem.style.borderRadius = '0%';
    } else {
        //console.log('kör');
        elem.style.borderRadius = '50%';
    }
}

function changeShapeSize(elem) {
    var randomNr = Math.random();
    var size = Math.floor((randomNr * 400 + 100) / 2);
    //console.log(size);
    elem.style.width = size + 'px';
    elem.style.height = size + 'px';
    return size;
}

function getRandomTimeInterval() {
    return Math.random() * 2000;
}

function randomPos(elem, siz) {
    //var WindW = window.innerWidth;
    //var W = WindW.slice(0, -2);
 //var W = Math.floor((Math.random() * window.innerWidth) - siz)+'px';
    //onsole.log(W);
    shape.style.top = Math.floor((Math.random() * window.innerWidth) - siz)+'px';
    shape.style.left = Math.floor((Math.random() * window.innerHeight) - siz) + 'px';
}

function changeColor(elem) {
    elem.style.backgroundColor = 'hsl(' + Math.random() * 360 + ', ' + Math.random() * 100 +'%, 50%)';
}


function hideShapeElement() {
    shape.style.display ='none';
}

//developer.mozilla.org