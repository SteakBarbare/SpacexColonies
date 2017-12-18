let Application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite;

//Create a Pixi Application
let app = new PIXI.Application({
    width: 3000,
    height: 3000,
    antialias: true, 
    transparent: false, 
    resolution: 1,
    forceCanvas: true
});

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

app.renderer.backgroundColor = 0x061639;
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);

PIXI.loader
.add("Pute", "images/testSprites/1.png")
.load(setup);
let sprite;
function setup() {
    sprite = new PIXI.Sprite(PIXI.loader.resources.Pute.texture);
    app.stage.addChild(sprite);
}

// Ressources

let energy = 0,
    matierials = 0,
    food = 0;

// Grid Ini

let grid = new Array(30);

for (let i = 0; i < 31; i++){
    grid[i] = [i*100];
    for(let j = 0; j < 31; j++){
        grid[i][j] = [i*100, j*100, 0];
    }
}

// Construction Previz

document.addEventListener(
    'mousemove',
    (e) =>{
        sprite.x = e.clientX - (e.clientX % 100);
        sprite.y = e.clientY - (e.clientY % 100);
        
    }
)

// Building Placement

document.addEventListener(
    'click',
    (e) =>{
        const coordX = ((e.clientX - (e.clientX % 100)) / 100);
        const coordY = ((e.clientY - (e.clientY % 100)) / 100);
        if(grid[coordX][coordY][2] == 0){
            setup();
            grid[coordX][coordY][2] = 1
        }else{
        console.log('Pute');
        }
    }
)

