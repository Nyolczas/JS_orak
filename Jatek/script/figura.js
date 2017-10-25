function Figura() {
    "use strict";
    this.x = 0;
    this.y = 0;
    this.elforgatas = 0;
    this.szin = "green";

    this.rajzol = function (ctx) {
        ctx.save();

        ctx.translate(this.x, this.y);
        ctx.rotate(this.elforgatas);

        ctx.lineWidth = 2;
        ctx.fillStyle = this.szin;

        ctx.beginPath();

        ctx.moveTo(-25, -25);
        ctx.lineTo(25, 0);
        ctx.lineTo(-25, 25);
        ctx.lineTo(0, 0);

        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        ctx.restore();
    };
}
