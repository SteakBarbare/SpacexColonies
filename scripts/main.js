let buildingName = "headQuarters";

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
const canvasBuilder = document.querySelector('canvas');


app.renderer.backgroundColor = 0xc1440e;
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight)

PIXI.loader
.add("map", "images/map.png")
.add("headQuarters", "images/headquarters.png")
.add("D3Printer", "images/3DPrinter.png")
.add("solarTurbine", "images/solarTurbine.png")
.add("greenhouse", "images/greenhouse.png")
.add("silo", "images/silo.png")
.add("battery", "images/battery.png")
.add("houses", "images/houses.png")
.add("drill", "images/drill.png")
.add("sickBay", "images/sickBay.png")
.add("launchingRamp", "images/launchingRamp.png")
.add("leindenfrostTurbine", "images/leindenfrostTurbine.png")
.add("sportsHall", "images/sportsHall.png")

.load(setupIni);

// Sprite Création

let sprite;

function setup() {
    const coordX = sprite.x;
    const coordY = sprite.y;
    console.log("Pute");
    if(buildingName == "headQuarters"){
        sprite = new PIXI.Sprite(PIXI.loader.resources.headQuarters.texture);
        sprite.x = coordX;
        sprite.y = coordY;
        app.stage.addChild(sprite);
    }else if(buildingName == "greenhouse"){
        sprite = new PIXI.Sprite(PIXI.loader.resources.greenhouse.texture);
        sprite.x = coordX;
        sprite.y = coordY;
        app.stage.addChild(sprite);
    }else if(buildingName == "D3Printer"){
        sprite = new PIXI.Sprite(PIXI.loader.resources.D3Printer.texture);
        sprite.x = coordX;
        sprite.y = coordY;
        app.stage.addChild(sprite);
    }else if(buildingName == "solarTurbine"){
        sprite = new PIXI.Sprite(PIXI.loader.resources.solarTurbine.texture);
        sprite.x = coordX;
        sprite.y = coordY;
        app.stage.addChild(sprite);
    }else if(buildingName == "silo"){
        sprite = new PIXI.Sprite(PIXI.loader.resources.silo.texture);
        sprite.x = coordX;
        sprite.y = coordY;
        app.stage.addChild(sprite);
    }else if(buildingName == "battery"){
        sprite = new PIXI.Sprite(PIXI.loader.resources.battery.texture);
        sprite.x = coordX;
        sprite.y = coordY;
        app.stage.addChild(sprite);
    }else if(buildingName == "houses"){
        sprite = new PIXI.Sprite(PIXI.loader.resources.houses.texture);
        sprite.x = coordX;
        sprite.y = coordY;
        app.stage.addChild(sprite);
    }else if(buildingName == "drill"){
        sprite = new PIXI.Sprite(PIXI.loader.resources.drill.texture);
        sprite.x = coordX;
        sprite.y = coordY;
        app.stage.addChild(sprite);
    }else if(buildingName == "sickBay"){
        sprite = new PIXI.Sprite(PIXI.loader.resources.sickBay.texture);
        sprite.x = coordX;
        sprite.y = coordY;
        app.stage.addChild(sprite);
    }else if(buildingName == "launchingRamp"){
        sprite = new PIXI.Sprite(PIXI.loader.resources.launchingRamp.texture);
        sprite.x = coordX;
        sprite.y = coordY;
        app.stage.addChild(sprite);
    }else if(buildingName == "leindenfrostTurbine"){
        sprite = new PIXI.Sprite(PIXI.loader.resources.leindenfrostTurbine.texture);
        sprite.x = coordX;
        sprite.y = coordY;
        app.stage.addChild(sprite);
    }else if(buildingName == "sportsHall"){
        sprite = new PIXI.Sprite(PIXI.loader.resources.sportsHall.texture);
        sprite.x = coordX;
        sprite.y = coordY;
        app.stage.addChild(sprite);
    }
}

function setupIni() {

    const coordX = (canvasBuilder.width / 2 - (canvasBuilder.width / 2 % 100)) / 100;
    const coordY = (canvasBuilder.height / 2 - (canvasBuilder.height / 2 % 100)) / 100;
    console.log("Jeej");
    sprite = new PIXI.Sprite(PIXI.loader.resources.map.texture);
    app.stage.addChild(sprite);
    sprite = new PIXI.Sprite(PIXI.loader.resources.headQuarters.texture);
    sprite.x = coordX * 100;
    sprite.y = coordY * 100;
    grid[coordX][coordY][2] = "headQuarters";
    app.stage.addChild(sprite);
    sprite = new PIXI.Sprite(PIXI.loader.resources.headQuarters.texture);
    app.stage.removeChild(sprite);
    selection = true;
}

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

for (let i = 0; i < grid.length; i++){
    grid[i] = [i*100];
    for(let j = 0; j < grid.length; j++){
        grid[i][j] = [i*100, j*100, 0];
    }
}

// Construction Previz

canvasBuilder.addEventListener(
    'mousemove',
    (e) =>{
        sprite.x = e.clientX - (e.clientX % 100);
        sprite.y = e.clientY - (e.clientY % 100);
    }
)

// Building Placement

canvasBuilder.addEventListener(
    'click',
    (e) =>{
        const coordX = ((e.clientX - (e.clientX % 100)) / 100);
        const coordY = ((e.clientY - (e.clientY % 100)) / 100);
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

// Food Consumption & Production

setInterval(
    ()=>{
        let production = 0;
        for(let i = 0; i < grid.length; i++){
            for(let j = 0; j < grid.length; j++){
                if(grid[i][j][2] == "greenhouse"){
                    production++;
                }
            }
        }
        food -= 0.05 * pilgrims - (production * 0.6);
        console.log((Math.random()*100) < 2);
        if(food < 0){
            food = 0;
        }else if(food > maxFood){
            food = maxFood;
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

// Building Selection from DOM

const buildingButtons = document.querySelectorAll('.buildingsButtons');

for(let i = 0; i < buildingButtons.length; i++){
    buildingButtons[i].addEventListener(
        'click',
        (event)=> {
            buildingName = buildings[i + 1].gameName;
            console.log(buildingName);
            app.stage.removeChild(sprite);
            setup();
            selection = false;
        }
    )
}

//Buildings objects stats

const headQuarters = {
    name: "HeadQuarter",
    gameName: "headQuarters",
    description: "",
    materialsPrice: 0,
    materialsProduction: 0,
    materialLimit: 0,
    energyPrice: 0,
    energyProduction: 0,
    energyUsed: 0,
    energyLimit: 0,
    foodProduction: 0,
    foodLimit: 0,
    pop: 0
}

const threeDPrinter = {
    name: "3D Printer",
    gameName: "D3Printer",
    description: "",
    materialsPrice: 0,
    materialsProduction: 0,
    materialLimit: 0,
    energyPrice: 0,
    energyProduction: 0,
    energyUsed: 5,
    energyLimit: 0,
    foodProduction: 0,
    foodLimit: 0,
    pop: 0
}

const hydroOxygenComplex = {
    name: "Hydro-Oxygen Complex",
    gameName: "hydroOxygenComplex",
    description: "",
    materialsPrice: 25,
    materialsProduction: 0,
    materialLimit: 0,
    energyPrice: 50,
    energyProduction: 0,
    energyUsed: 5,
    energyLimit: 0,
    foodProduction: 0,
    foodLimit: 0,
    pop: 0
}

const solarTurbine = {
    name: "Solar Turbine",
    gameName: "solarTurbine",
    description: "",
    materialsPrice: 25,
    materialsProduction: 0,
    materialLimit: 0,
    energyPrice: 20,
    energyProduction: 20,
    energyUsed: 5,
    energyLimit: 0,
    foodProduction: 0,
    foodLimit: 0,
    pop: 0
}

const greenhouse = {
    name: "Greenhouse",
    gameName: "greenhouse",
    description: "",
    materialsPrice: 20,
    materialsProduction: 0,
    materialLimit: 0,
    energyPrice: 100,
    energyProduction: 0,
    energyUsed: 10,
    energyLimit: 0,
    foodProduction: 4,
    foodLimit: 0,
    pop: 0
}

const sulfurFactory = {
    name: "Sulfur Factory",
    gameName: "sulfurFactory",
    description: "",
    materialsPrice: 25,
    materialsProduction: 5,
    materialLimit: 0,
    energyPrice: 130,
    energyProduction: 0,
    energyUsed: 5,
    energyLimit: 0,
    foodProduction: 0,
    foodLimit: 0,
    pop: 0
}

const silo = {
    name: "Silo",
    gameName: "silo",
    description: "",
    materialsPrice: 50,
    materialsProduction: 0,
    materialLimit: 0,
    energyPrice: 50,
    energyProduction: 0,
    energyUsed: 10,
    energyLimit: 0,
    foodProduction: 0,
    foodLimit: 100,
    pop: 0
}

const battery = {
    name: "Battery",
    gameName: "battery",
    description: "",
    materialsPrice: 200,
    materialsProduction: 0,
    materialLimit: 0,
    energyPrice: 200,
    energyProduction: 0,
    energyUsed: 10,
    energyLimit: 0,
    foodProduction: 0,
    foodLimit: 0,
    pop: 0
}

const warehouse = {
    name: "Warehouse",
    gameName: "warehouse",
    description: "",
    materialsPrice: 150,
    materialsProduction: 0,
    materialLimit: 100,
    energyPrice: 150,
    energyProduction: 0,
    energyUsed: 10,
    energyLimit: 0,
    foodProduction: 0,
    foodLimit: 0,
    pop: 0
}

const launchingRamp = {
    name: "Launching ramp",
    gameName: "launchingRamp",
    description: "",
    materialsPrice: 150,
    materialsProduction: 0,
    materialLimit: 0,
    energyPrice: 90,
    energyProduction: 0,
    energyUsed: 50,
    energyLimit: 0,
    foodProduction: 0,
    foodLimit: 0,
    pop: 0
}

const houses = {
    name: "Houses",
    gameName: "houses",
    description: "",
    materialsPrice: 35,
    materialsProduction: 0,
    materialLimit: 0,
    energyPrice: 50,
    energyProduction: 0,
    energyUsed: 10,
    energyLimit: 0,
    foodProduction: 0,
    foodLimit: 0,
    pop: 0
}

const sickBay = {
    name: "Sick Bay",
    gameName: "sickBay",
    description: "",
    materialsPrice: 40,
    materialsProduction: 0,
    materialLimit: 0,
    energyPrice: 100,
    energyProduction: 0,
    energyUsed: 10,
    energyLimit: 0,
    foodProduction: 0,
    foodLimit: 0,
    pop: 0
}

const sportsHall = {
    name: "Sports Hall",
    gameName: "sportsHall",
    description: "",
    materialsPrice: 100,
    materialsProduction: 0,
    materialLimit: 0,
    energyPrice: 150,
    energyProduction: 0,
    energyUsed: 20,
    energyLimit: 0,
    foodProduction: 0,
    foodLimit: 0,
    pop: 0
}

const leindenfrostTurbine = {
    name: "Leindenfrost Turbine",
    gameName: "leindenfrostTurbine",
    description: "",
    materialsPrice: 300,
    materialsProduction: 0,
    materialLimit: 0,
    energyPrice: 500,
    energyProduction: 45,
    energyUsed: 0,
    energyLimit: 0,
    foodProduction: 0,
    foodLimit: 0,
    pop: 0
}

const oilSlickDrill = {
    name: "Oil Slick Drill",
    gameName: "drill",
    description: "",
    materialsPrice: 800,
    materialsProduction: 0,
    materialLimit: 0,
    energyPrice: 300,
    energyProduction: 0,
    energyUsed: 100,
    energyLimit: 0,
    foodProduction: 0,
    foodLimit: 0,
    pop: 0
}

//Array of all the buldings objects

const buildings =[
    headQuarters, 
    threeDPrinter, 
    hydroOxygenComplex, 
    solarTurbine, 
    greenhouse, 
    sulfurFactory, 
    silo, 
    battery, 
    warehouse, 
    launchingRamp,
    houses, 
    sickBay, 
    sportsHall, 
    leindenfrostTurbine, 
    oilSlickDrill
];
