var canvas = document.querySelector('canvas');

var W = window.innerWidth;
var H = window.innerHeight;

canvas.width = W;
canvas.height = H;

var c = canvas.getContext('2d');
// =============================================
c.strokeStyle = 'rgba(0, 125, 255, 0.33)';

var minSpeed = 0.2;
var speedFactor = 3;
var minRadius = 50;
var maxRadius = 150 - minRadius;
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

var circle = new Circle(200, 200, 3, 3, 20);
// 



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

    circle.update();

}

animate();
