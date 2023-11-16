const canvas = document.getElementById('canvas');
const bg = document.getElementById('bg-blur');
const loading = document.getElementById('loading');

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var x = 0;
var n = 0;
var y = window.innerHeight /2;
var r = 0;

function init () {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function draw() {
    if (x < window.innerWidth) {
        x+=20;
    } else {
        if (r < window.innerWidth + 1000) {
            r+=50;
        }
    }


    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.save();
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = "xor";

    //line
    ctx.beginPath();
    ctx.setLineDash([10,20]);
    ctx.rotate(0);
    ctx.moveTo(0,y);
    ctx.lineTo(x,y);
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.stroke();
    ctx.restore();

    //circle
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    // ctx.stroke();
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.restore();

    //circle-center
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.rotate(0);
    ctx.arc(x, y, 2, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.restore();

    //text
    ctx.font = "12px Arial";
    ctx.fillText(x/100 + "%", x, y-12);

    // //circle-lines
    // if (n < 360) {
    //     n+=1
    // }
    // ctx.beginPath();
    // ctx.strokeStyle = 'green';
    // var rad_x = Math.cos(n * Math.PI / 180) * r+x;
    // var rad_y = Math.sin(n * Math.PI / 180) * r+y;
    // ctx.moveTo(x, y);
    // ctx.lineTo(rad_x, rad_y);
    // ctx.stroke();
    // ctx.restore();

    // // dot-lines
    // ctx.beginPath();
    // ctx.setLineDash([]);
    // ctx.rotate(0);
    // ctx.arc(rad_x, rad_y, 2, 0, 2 * Math.PI);
    // ctx.strokeStyle = "black";
    // ctx.stroke();
    // ctx.fillStyle = "black";
    // ctx.fill();
    // ctx.restore();

    // ctx.save();
    // ctx.beginPath();
    // ctx.setLineDash([]);
    // ctx.moveTo(x + r, y);
    // var rad_x_line = Math.cos(n * Math.PI / 180) * r+x;
    // var rad_y_line = Math.sin(n * Math.PI / 180) * r+y;
    // ctx.lineTo(rad_x_line, rad_y_line);
    // ctx.strokeStyle = "blue";
    // ctx.stroke();
}

init();

setTimeout(function() {
    setInterval(draw, 10);
    loading.style.left = '150%';
},3000);

setTimeout(function() {
    canvas.style.opacity = "0";
    canvas.style.visibility = "hidden";
    bg.style.top = "100%";
}, 5000)

// draw();


