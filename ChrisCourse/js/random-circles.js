var canvas = document.querySelector('canvas');

var W = window.innerWidth;
var H = window.innerHeight;

canvas.width = W;
canvas.height = H;

var c = canvas.getContext('2d');

c.strokeStyle = 'rgba(0, 125, 255, 0.5)';

for (var i = 0; i < 1550; i++) {
    c.beginPath();
    var x = Math.random() * W;
    var y = Math.random() * H;
    var min = 50;
    var max = 150 - min;
    var r = Math.random() * max + min;
    c.arc( x, y, r, 0, Math.PI * 2, false);
    c.stroke();
}