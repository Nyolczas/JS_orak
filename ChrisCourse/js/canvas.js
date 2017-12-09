var canvas = document.querySelector('canvas');

var W = window.innerWidth;
var H = window.innerHeight;

canvas.width = W;
canvas.height = H;

var c = canvas.getContext('2d');

// Rectangle

// c.fillStyle = 'rgba(255, 0, 0, 0.2)';
// c.fillRect(100, 100, 100, 100);

// Line

// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = 'rgba(255, 255, 255, 0.2)';
// c.stroke();

// Arc / Circle

// c.beginPath();
// c.arc(300, 300, 50, 0, Math.PI * 2, false);
// c.strokeStyle = 'rgba(0, 125, 255, 0.5)';
// c.stroke();

c.strokeStyle = 'rgba(0, 125, 255, 0.5)';

for (var i = 0; i < 5550; i++) {
    c.beginPath();
    var x = Math.random() * W;
    var y = Math.random() * H;
    var r = Math.random() * 200;
    c.arc( x, y, r, 0, Math.PI * 2, false);
    c.stroke();
}