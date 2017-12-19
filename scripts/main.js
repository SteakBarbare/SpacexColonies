const buildings = ["HeadQuarters", "Farm", "EnergyGenerator"]
let buildingName = "HeadQuarters";
const $green = document.querySelector('.green')
const $red = document.querySelector('.red')
const $yellow = document.querySelector('.yellow')

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
const canvasBuilder = document.querySelector('canvas')

app.renderer.backgroundColor = 0x061639;
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight)

PIXI.loader
.add("HeadQuarters", "images/QG.png")
.add("Farm", "images/cat.png")
.add("Pute", "images/testSprites/1.png")
.load(setupIni);

// Sprite Création

let sprite;

function setup() {
    const coordX = sprite.x;
    const coordY = sprite.y;
    console.log("Jeej");
    if(buildingName == "HeadQuarters"){
        sprite = new PIXI.Sprite(PIXI.loader.resources.HeadQuarters.texture);
        sprite.x = coordX;
        sprite.y = coordY;
        app.stage.addChild(sprite);
    }else if(buildingName == "Farm"){
        sprite = new PIXI.Sprite(PIXI.loader.resources.Farm.texture);
        sprite.x = coordX;
        sprite.y = coordY;
        app.stage.addChild(sprite);
    }
}

function setupIni() {

    console.log("Jeej");
    if(buildingName == "HeadQuarters"){
        sprite = new PIXI.Sprite(PIXI.loader.resources.HeadQuarters.texture);
        app.stage.addChild(sprite);
    }else if(buildingName == "Farm"){
        sprite = new PIXI.Sprite(PIXI.loader.resources.Farm.texture);
        app.stage.addChild(sprite);
    }
}

// Building Selection

$green.addEventListener('click', (event)=>
{
    buildingName = buildings[0]
    app.stage.removeChild(sprite);
    setup();
    selection = false;
    console.log(buildingName)
})


$red.addEventListener('click', (event)=>
{
    buildingName = buildings[1]
    app.stage.removeChild(sprite);
    setup();
    selection = false;
    console.log(buildingName)
})


$yellow.addEventListener('click', (event)=>
{
    buildingName = buildings[2]
    console.log(buildingName)    
})

// Ressources

let energy = 100,
    maxEnergy = 100,
    materials = 100,
    maxMaterials = 100,
    pilgrims = 20,
    maxPilgrims = 20,
    food = 100,
    maxFood = 100;

// Grid Ini

let grid = new Array(30);
let selection = true;

for (let i = 0; i < 31; i++){
    grid[i] = [i*100];
    for(let j = 0; j < 31; j++){
        grid[i][j] = [i*100, j*100, 0];
    }
}

// Construction Previz

canvasBuilder.addEventListener(
    'mousemove',
    (e) =>{
        sprite.x = e.clientX - (e.clientX % 100);
        sprite.y = e.clientY - (e.clientY % 100) - 100;
    }
)

// Building Placement

canvasBuilder.addEventListener(
    'click',
    (e) =>{
        const coordX = ((e.clientX - (e.clientX % 100)) / 100);
        const coordY = ((e.clientY - (e.clientY % 100) - 100) / 100);
        if((grid[coordX][coordY][2] == 0) && (selection == false)){
            setup();
            grid[coordX][coordY][2] = buildingName;
        }else{
            app.stage.removeChild(sprite);
            console.log(grid[coordX][coordY][2]);
            selection = true;
        }
    }
)

// Selection mode

document.addEventListener(
    'keydown',
    (e) =>{
        if(e.keyCode == 27){
            app.stage.removeChild(sprite);
            selection = true;
        }
    }
)

// Ressources Depletion

const actualFood = document.querySelector('.food');
const actualPilgrims = document.querySelector('.pilgrims');

// Food Consumption
setInterval(
    ()=>{
        food -= 0.05 * pilgrims;
        if(food < 0){
            food = 0;
        }   
    },
    1000
);

//  Death by Starvation
setInterval(
    ()=>{
        if(food <= 0){
            pilgrims -= 1;
        }
    },
    5000
);

// Notifications
setInterval(
    ()=>{
        actualFood.innerHTML = `Food Left: ${Math.trunc(food)}`; 
        actualPilgrims.innerHTML = `Pilgrims Alive: ${pilgrims}`;
    },
    100
);
