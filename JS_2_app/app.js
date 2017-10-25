var shape = document.getElementById('shape');

shape.onclick = function () {

    changeShapeBorderRadius(this);
    changeShapeSize(this);
    
    
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
};

function changeShapeSize(elem) {
    var randomNr = Math.random();
    var size = Math.floor((randomNr*400+100)/2);
    console.log(size);
    elem.style.width = size + 'px';
    elem.style.height = size + 'px';
}
