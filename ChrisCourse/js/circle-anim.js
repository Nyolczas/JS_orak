var canvas = document.querySelector('canvas');

var W = window.innerWidth;
var H = window.innerHeight;

canvas.width = W;
canvas.height = H;

var c = canvas.getContext('2d');

// =============================================
c.strokeStyle = 'rgba(0, 125, 255, 0.5)';

x = 50;
var xSpeed = 2;
y = 50;
var ySpeed = 3; 
radius = 20;
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
