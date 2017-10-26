var cucc = document.getElementById('cucc');

cucc.onclick = function () {

    addBorder(this);
}

function addBorder(e) {
    e.style.border = '1px solid black';
}