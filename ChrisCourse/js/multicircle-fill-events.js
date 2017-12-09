var canvas = document.querySelector('canvas');

var W = window.innerWidth;
var H = window.innerHeight;

canvas.width = W;
canvas.height = H;

var c = canvas.getContext('2d');
// ============================================= Global variables
//c.strokeStyle = 'rgba(0, 125, 255, 0.33)';
c.lineWidth = 10;

var minSpeed = 0.2;
var speedFactor = 0.7;
var minMinRadius = 3;
var minRadius = 12;
var maxRadius = 40;
var mouseField = 33;

var quant = Math.floor((W + H) * 0.3);

var clrArray = [
    '#6C1432',
    '#8F425A',
    '#FAB395',
    '#A67054',
    '#E9A182'
];
// ============================================= Events
var mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove',
    function (event) {
        mouse.x = event.x;
        mouse.y = event.y;
        //console.log(mouse);
    })

// =============================================   Circle creation and anim
function Circle(x, y, xSpeed, ySpeed, radius) {
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.radius = radius;
    this.minRadius = radius;
    this.color = clrArray[Math.round(Math.random() * clrArray.length)];

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        //c.stroke();
        // c.shadowColor = this.color;
        // c.shadowBlur = 5;
        c.fillStyle = this.color;
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

        // interaktivity
        if (mouse.x - this.x < mouseField && mouse.x - this.x > -mouseField
            && mouse.y - this.y < mouseField && mouse.y - this.y > -mouseField) {
            if (this.radius < maxRadius) {
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
    var radius = Math.random() * minRadius + minMinRadius;

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
