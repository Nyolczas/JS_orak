var canvas = document.querySelector('canvas');

var W = window.innerWidth;
var H = window.innerHeight;

canvas.width = W;
canvas.height = H;

var c = canvas.getContext('2d');
// =============================================
c.strokeStyle = 'rgba(0, 125, 255, 0.33)';

var minSpeed = 0.2;
var speedFactor = 0.5;
var minRadius = 8;
var maxRadius = 88 - minRadius;

var quant = Math.floor((W + H) / 50);
// =============================================

function Circle(x, y, xSpeed, ySpeed, radius) {
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.radius = radius;

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.stroke();
        c.fill();
    }

    this.update = function () {
        if (this.x + this.radius > W || this.x - this.radius < 0) {
            this.xSpeed = -this.xSpeed;
        }
        this.x += this.xSpeed;

        if (this.y + this.radius > H || this.y - this.radius < 0) {
            this.ySpeed = -this.ySpeed;
        }
        this.y += this.ySpeed;

        this.draw();
    }
}

var CircleArray = [];

for (var i = 0; i < quant; i++) {
    var x = Math.random() * W;
    var y = Math.random() * H;
    var xSpeed = (Math.random() - 0.5) * speedFactor;
    xSpeed += xSpeed * minSpeed;
    var ySpeed = (Math.random() - 0.5) * speedFactor;
    ySpeed += ySpeed * minSpeed;
    radius = Math.random() * maxRadius + minRadius;

    CircleArray.push(new Circle(x, y, xSpeed, ySpeed, radius));
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, W, H);

    for (var i = 0; i < CircleArray.length; i++) {
        CircleArray[i].update();
    }
}

animate();
