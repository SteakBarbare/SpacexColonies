const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const text = "Jeej fuuf saas";
const coords = { x: 300, y: 300 }
const particles = [];


// context.beginPath();

// context.moveTo(50, 50);
// context.lineTo(200, 200);
// context.lineTo(50, 200);
// // context.closePath();

// context.lineWidth = 10;
// context.lineCap = 'round';
// context.lineJoin = 'round';
// context.strokeStyle = 'purple';

// // context.fillStyle = 'darkred';


// // context.shadowColor = 'rgba(100, 0, 0, 0.3)';
// // context.shadowBlur = 10;
// // context.shadowOffsetX = 8;
// // context.shadowOffsetY = 20;

// // context.fill();
// // context.stroke();

// // context.beginPath();
// // context.rect(250, 250, 400, 300);
// // context.shadowColor = 'rgba(0, 0, 0, 0)';
// // context.fill();
// // context.stroke();

// context.beginPath();
// context.moveTo(150, 300);
// context.arc(150, 300, 100, 0, Math.PI * 1.75);

// // context.fillColor = 'purple';
// context.fill();
// // context.stroke();

// context.beginPath();
// context.arc(150, 260, 10, 0, Math.PI * 2);
// context.fillStyle = "yellow";
// context.fill();

// context.beginPath();

// context.fillRect(220, 100, 300, 200);
// context.clearRect(220, 150, 100, 100);

// const measures = context.measureText(text);
// console.log(measures);

// context.font = '40px Arial';
// context.textAlign = 'center';
// context.textBaseline = "top";

// context.fillStyle = "black";
// context.fillText(text, 400, 300);

// const image = document.createElement('img');
// const image = new Image();

// image.addEventListener(
//     'load',
//     () =>{
//         context.drawImage(image, 50, 50);
//     },
//     false
// );

// // image.setAttribute('src', 'images/1.png');
// image.src = 'images/1.png';

// const gradient = context.createRadialGradient(
//     100, 100, 50,
//     100, 290, 250
// )
// gradient.addColorStop(0, 'rgb(255, 80, 0)');
// gradient.addColorStop(0.5, 'rgb(255, 191, 0)');
// gradient.addColorStop(1, 'rgb(255, 246, 155)');

// context.fillStyle = gradient;

// context.fillRect(0, 0, 500, 500);


// context.beginPath();
// context.moveTo(100, 100);
// context.bezierCurveTo(
//     300, 150, 
//     300, 300,
//     300, 300
// )
// context.lineWidth = 10;
// context.stroke();

// context.beginPath();
// context.moveTo(100, 100);
// context.quadraticCurveTo(
//     300, 100, 
//     300, 300
// )
// context.lineWidth = 10;
// context.stroke();

// context.globalAlpha = 0.5;

// context.globalCompositeOperation = 'darken';

// context.fillStyle = '#ff0000';
// context.fillRect(50, 50, 200, 200);

// context.fillStyle = '#00ff00';
// context.fillRect(100, 100, 200, 200);

// context.fillStyle = '#0000ff';
// context.fillRect(150, 150, 200, 200);

// const loop = () => {
//     window.requestAnimationFrame(loop);
//     if(coords.x >= canvas.width + 50){
//         coords.x = -50;
//     }
//     coords.x += 4;
//     coords.y = 300 - Math.abs(Math.sin(Date.now() / 200)) * 100;
    
//     context.clearRect(0, 0, canvas.width, canvas.height);
    
//     context.beginPath();
    
//     context.arc(coords.x, coords.y, 50, 0, Math.PI * 2);
//     context.fillStyle = 'orange';
//     context.fill();
// }

const mouse = {
    x: 0, 
    y: 0
};

const ballCoords = {
    x: 0,
    y: 0
};

// const loop = () => {
//     window.requestAnimationFrame(loop);


//     context.fillStyle = 'rgba(255, 255, 255, 0.3)';
//     context.fillRect(0, 0, canvas.width, canvas.height);
//     ballCoords.x += (mouse.x - ballCoords.x) * 0.05
//     ballCoords.y += (mouse.y - ballCoords.y) * 0.05

//     context.beginPath();
    
//     context.arc(ballCoords.x, ballCoords.y, 50, 0, Math.PI * 2);
//     context.fillStyle = 'orange';
//     context.fill();
// }

// window.requestAnimationFrame(loop);

// document.addEventListener(
//     'mousemove',
//     (e) =>{
//         mouse.x = e.clientX;
//         mouse.y = e.clientY;
//         console.log(mouse);
//     },
//     false
// );
document.addEventListener(
    'mousemove',
    (e) =>{
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    },
    false
);

const create = () =>{
    const particle = {};
    particle.x = mouse.x;
    particle.y = mouse.y;
    particle.angle = Math.random() * Math.PI * 2;
    particle.fillStyle = `hsl(${Math.random()*360}, 100%, 50%)`;
    particle.speed = Math.random() * 5;

    particles.push(particle);
}

const update = () =>{
    let i = 0;
    for(const particle of particles){
        particle.x += (Math.cos(particle.angle)) * particle.speed;
        particle.y += (Math.sin(particle.angle)) * particle.speed;
        if((particle.x > canvas.width) || (particle.x < 0) || (particle.y > canvas.height) || (particle.y < 0)){
            particles.slice(i, 10);
        }
        i++;
    }
    console.log(particles);
}

const clear = () =>{
    context.clearRect(0, 0, canvas.width, canvas.height);
}

const draw = () =>{
    context.globalCompositeOperation = 'lighter';
    for(const particle of particles){
        context.beginPath();
        context.fillStyle = particle.fillStyle;
        context.arc(particle.x, particle.y, (Math.random()*1), 0, Math.PI * 2);
        context.fill();
    }
}

const resize = () =>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener(
    'resize',
    resize
)
resize();

const loop = () => {
    window.requestAnimationFrame(loop);

    create();
    update();
    clear();
    draw();

}

window.requestAnimationFrame(loop);

