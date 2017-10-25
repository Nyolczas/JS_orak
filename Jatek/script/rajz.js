/// <reference path="figura.js" />


window.onload = function () {
    "use strict";
    var rajzlap = document.getElementById("vaszon");
    var ctx = rajzlap.getContext('2d');

    var fig1 = new Figura();
    fig1.x = 150;
    fig1.y = 80;
    fig1.elforgatas = 3;
    fig1.szin = "blue";


    (function kockaRajz() {
        window.requestAnimationFrame(kockaRajz, rajzlap);

        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        fig1.elforgatas += 0.1;
        fig1.rajzol(ctx);
    } ());



}
