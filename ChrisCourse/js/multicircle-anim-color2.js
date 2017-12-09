var canvas = document.querySelector('canvas');

var W = window.innerWidth;
var H = window.innerHeight;

canvas.width = W;
canvas.height = H;

var c = canvas.getContext('2d');
// ============================================= Set canvas color
function counter(x) {
    if (x == 360) {
        return 1;
    } else {
        return x + 1;
    }
};
var cnt = 0;
function colorClock() {
    cnt = counter(cnt);
    setTimeout(function () {
        colorClock();
    }, 100);

    var hslColor = 'hsl(' + cnt + ', 80%, 10%)';
    document.body.style.background = hslColor;
};
colorClock();
// ============================================= ============================================= =============================================
// ============================================= Animated circles =============================================
// c.strokeStyle = 'rgba(255, 255, 255, 0.1)';

var minSpeed = 0.2;
var speedFactor = 0.5;
var minRadius = Math.floor((W + H) * 0.004);
var maxRadius = minRadius * 8 - minRadius;

var quant = Math.floor((W + H) * 1.2);
var mouseField = 33;

// ============================================= Events
var mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove',
    function (event) {
        mouse.x = event.x;
        mouse.y = event.y;
    })

// =============================================

function Circle(x, y, xSpeed, ySpeed, radius) {
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.radius = radius;
    this.minRadius = radius;
    this.strokeWidth = 1;

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = 'hsla(' + cnt + ', 50%, 50%, 0.38)';
        c.lineWidth = this.strokeWidth;
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

        // interaktivity
        if (mouse.x - this.x < mouseField && mouse.x - this.x > -mouseField
            && mouse.y - this.y < mouseField && mouse.y - this.y > -mouseField) {
            if (this.radius < maxRadius*2) {
                this.radius++;
            }
        } else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }

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
