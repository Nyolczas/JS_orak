var canvas = document.querySelector('canvas');

var W = window.innerWidth;
var H = window.innerHeight;

canvas.width = W;
canvas.height = H;

var c = canvas.getContext('2d');

// =============================================

c.strokeStyle = 'rgba(0, 125, 255, 0.5)';
c.beginPath();
c.arc( 200, 200, 30, 0, Math.PI * 2, false);
c.stroke();