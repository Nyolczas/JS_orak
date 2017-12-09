var canvas = document.querySelector('canvas');

var W = window.innerWidth;
var H = window.innerHeight;

canvas.width = W;
canvas.height = H;

var c = canvas.getContext('2d');

// =============================================
function Circle(x, y) {
    this.x = x; 
    this.y = y; 

    this.draw = function() {
        
    }
}

c.strokeStyle = 'rgba(0, 125, 255, 0.5)';

var minSpeed = 0.2;
var speedFactor = 3;
var minRadius = 50;
var maxRadius = 150 - minRadius;

x = Math.random() * W;
var xSpeed = (Math.random() - 0.5) * speedFactor;
xSpeed += xSpeed * minSpeed;

y = Math.random() * H;
var ySpeed = (Math.random() - 0.5) * speedFactor;
ySpeed += ySpeed * minSpeed;

radius = Math.random() * maxRadius + minRadius;;

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, W, H);
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.stroke();

    if (x + radius > W || x - radius < 0) {
        xSpeed = -xSpeed;
    }
    x += xSpeed;

    if (y + radius > H || y - radius < 0) {
        ySpeed = -ySpeed;
    }
    y += ySpeed;
}

animate();
