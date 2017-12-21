let buildingName = "headQuarters";

const popupDiv = document.querySelector(".popUp");
const popupTitle = popupDiv.querySelector(".popUpH1");
const popupText = popupDiv.querySelectorAll(".popUpParagraph");

let Application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite;

//Create a Pixi Application
let app = new PIXI.Application({
    width: 1920,
    height: 1080,
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
.add("sulfurFactory", "images/sulfurFactory.png")
.add("warehouse", "images/warehouse.png")
.add("hydroOxygenComplex", "images/hydroOxygenComplex.png")

.load(setupIni);

// Sprite Creation

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
    }else if(buildingName == "sulfurFactory"){
        sprite = new PIXI.Sprite(PIXI.loader.resources.sulfurFactory.texture);
        sprite.x = coordX;
        sprite.y = coordY;
        app.stage.addChild(sprite);
    }else if(buildingName == "warehouse"){
        sprite = new PIXI.Sprite(PIXI.loader.resources.warehouse.texture);
        sprite.x = coordX;
        sprite.y = coordY;
        app.stage.addChild(sprite);
    }else if(buildingName == "hydroOxygenComplex"){
        sprite = new PIXI.Sprite(PIXI.loader.resources.hydroOxygenComplex.texture);
        sprite.x = coordX;
        sprite.y = coordY;
        app.stage.addChild(sprite);
    }
}

// Initial setup when launching the game

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

let energy = 150,
    maxEnergy = 150,
    materials = 100,
    maxMaterials = 100,
    pilgrims = 20,
    maxPilgrims = 20,
    food = 40,
    maxFood = 40;

// Grid Ini

let grid = new Array(30);
let selection = true;

for (let i = 0; i < grid.length; i++){
    grid[i] = [i*100];
    for(let j = 0; j < grid.length; j++){
        grid[i][j] = [i*100, j*100, 0, "Bollocks"];
    }
}

// Construction Previz

canvasBuilder.addEventListener(
    'mousemove',
    (e) =>{
        const coordX = e.clientX - (e.clientX % 100);
        const coordY = e.clientY - (e.clientY % 100);
        sprite.x = coordX;
        sprite.y = coordY;
    }
)

// Building Placement

canvasBuilder.addEventListener(
    'click',
    (e) =>{
        const coordX = ((e.clientX - (e.clientX % 100)) / 100);
        const coordY = ((e.clientY - (e.clientY % 100)) / 100);
        let conditions = true,
            buildingNumbers = 0;

        if((grid[coordX][coordY][2] == 0) && (selection == false)){
            for(let i = 1; i < buildings.length; i++){
                conditions = true;
                if(buildings[i].gameName == buildingName){
                    for(let j = 0; j < buildings[i].condition.length; j++){
                        let bool = false;
                        for(let fuuf = 0; fuuf < grid.length; fuuf++){
                            for(let jeej = 0; jeej < grid.length; jeej++){
                                if(grid[fuuf][jeej][2] == buildings[i].condition[j]){
                                    bool = true;
                                }
                            }
                        }
                        if(bool == false){
                            conditions = false;
                        }
                    }
                    if(conditions == true){
                        if((materials >= buildings[i].materialsPrice) && (energy >= buildings[i].energyPrice)){
                            for(let fuuf = 0; fuuf < grid.length; fuuf++){
                                for(let jeej = 0; jeej < grid.length; jeej++){
                                    if((grid[fuuf][jeej][2] != 0) && (grid[fuuf][jeej][2] != "house")){
                                        buildingNumbers++;
                                    }
                                }
                            }
                            // let encule = (Math.ceil(buildingNumbers/2));
                            // console.log(buildingNumbers);
                            // console.log(encule);
                            if((buildingNumbers < Math.ceil(pilgrims/3)) || (buildingName == "houses")){
                                materials -= buildings[i].materialsPrice;
                                energy -= buildings[i].energyPrice;
                                maxEnergy += buildings[i].energyLimit;
                                maxFood += buildings[i].foodLimit;
                                maxMaterials += buildings[i].materialLimit;
                                pilgrims += buildings[i].pop;
                                buildingNumbers = 0;                                
                                for(let fuuf = 0; fuuf < grid.length; fuuf++){
                                    for(let jeej = 0; jeej < grid.length; jeej++){
                                        if((grid[fuuf][jeej][2] != 0)){
                                            buildingNumbers++;
                                        }
                                    }
                                }
                                grid[coordX][coordY][3] = buildingNumbers+1;
                                setup();
                                grid[coordX][coordY][2] = buildingName;
                            }else{
                                window.alert("You dont have enough population to increase the size of your colony, build more houses")
                            }
                        }else{
                            const missingMat = buildings[i].materialsPrice - materials;
                            const missingEne = buildings[i].energyPrice - energy;
                            if(missingMat <= 0){
                                window.alert(`Missing ${0} materials and ${missingEne} energy.`);
                            }else if(missingEne <= 0){
                                window.alert(`Missing ${missingMat} materials and ${0} energy.`);
                            }else{
                                window.alert(`Missing ${missingMat} materials and ${missingEne} energy.`);
                            }
                        }
                    }else{
                        window.alert(`This building require the construction of: ${buildings[i].condition}`);
                    }
                }
            }     
        }else{
            app.stage.removeChild(sprite);
            console.log(grid[coordX][coordY][3]);
            if(grid[coordX][coordY][3] != "Bollocks"){
                popupDiv.style.display = "block";
                popupTitle.innerHTML = `${grid[coordX][coordY][2]}`;
                popupText[0].innerHTML = "The Hydro-Oxygen Complex is essential to start making food and ensure your pilgrim’s life.";
                popupText[1].innerHTML = "Most of all, it will unlock your main food building: the greenhouse.";
                popupText[2].innerHTML = "You’d better build it fast.";
            }
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

const stocks = document.querySelectorAll('.stocksValue');
const stocksPop = document.querySelector('.populationNumber');
const prod = document.querySelectorAll('.production');
const fillerBar = document.querySelectorAll('.gaugeFiller');


// Ressources Consumption & Production

setInterval(
    ()=>{
        //  Buildings
        let prodRation = 0,
            fillBarRatio = 0,
            greenH = 0,
            hydro = 0,
            printer = 0,
            generator = 0,
            factory = 0,
            energyStock = 0,
            wareH = 0,
            habitations = 0,
            sickB = 0,
            sport = 0,
            leiden = 0,
            fuelDrill = 0,
            launcher = 0;

        //  Food Production/Depletion

        //  Searching through the grid for food buildings
        for(let i = 0; i < grid.length; i++){
            for(let j = 0; j < grid.length; j++){
                if(grid[i][j][2] == "greenhouse"){
                    greenH++;
                }else if(grid[i][j][2] == "hydroOxygenComplex"){
                    hydro++
                }
            }
        }

        // Food update 
        prodRation -= 0.05 * pilgrims - (greenH * 0.6) - (hydro * 0.1);
        food += prodRation;

        if(food < 0){
            food = 0;
        }else if(food > maxFood){
            food = maxFood;
        }
        

        // Notifications -> Food

        fillBarRatio = (food / maxFood) * 100;

        stocks[1].innerHTML = `${Math.trunc(food)} / ${Math.trunc(maxFood)}`;
        prod[1].innerHTML = `${prodRation.toFixed(2)} / s`;
        fillerBar[1].style.width = `${fillBarRatio}%`;
        fillerBar[1].style.background = "#d66478";
        

        //  Energy Production/Depletion

        greenH = 0;
        hydro = 0;
        prodRation = 0;

        //  Searching through the grid for energy buildings
        for(let i = 0; i < grid.length; i++){
            for(let j = 0; j < grid.length; j++){
                if(grid[i][j][2] == "greenhouse"){
                    greenH++;
                }else if(grid[i][j][2] == "hydroOxygenComplex"){
                    hydro++
                }else if(grid[i][j][2] == "D3Printer"){
                    printer++
                }else if(grid[i][j][2] == "solarTurbine"){
                    generator++
                }else if(grid[i][j][2] == "sulfurFactory"){
                    factory++
                }else if(grid[i][j][2] == "battery"){
                    energyStock++
                }else if(grid[i][j][2] == "warehouse"){
                    wareH++
                }else if(grid[i][j][2] == "houses"){
                    habitations++
                }else if(grid[i][j][2] == "sickBay"){
                    sickB++
                }else if(grid[i][j][2] == "sportsHall"){
                    sport++
                }else if(grid[i][j][2] == "leindenfrostTurbine"){
                    leiden++
                }else if(grid[i][j][2] == "drill"){
                    fuelDrill++
                }else if(grid[i][j][2] == "launchingRamp"){
                    launcher++
                }
            }
        }

        // Energy update 
        prodRation -= -5 + (printer * 5) - (generator * 30) + (hydro * 5) + (greenH * 5) + (factory * 5) + (energyStock *5 ) + (wareH * 5) + (habitations * 8) + (sickB * 15) + (sport * 20) - (leiden * 200) + (fuelDrill * 100) + (launcher * 50);
        energy += prodRation;

        if(energy < 0){
            energy = 0;
        }else if(energy > maxEnergy){
            energy = maxEnergy;
        }

        // Notifications -> Energy

        fillBarRatio = (energy / maxEnergy) * 100;

        stocks[0].innerHTML = `${Math.trunc(energy)} / ${Math.trunc(maxEnergy)}`;
        prod[0].innerHTML = `${prodRation.toFixed(2)} / s`;
        fillerBar[0].style.width = `${fillBarRatio}%`;
        fillerBar[0].style.background = "#c6c60c";
        
        //  Materials Production/Depletion

        factory = 0;
        prodRation = 0;

        //  Searching through the grid for energy buildings
        for(let i = 0; i < grid.length; i++){
            for(let j = 0; j < grid.length; j++){
                if(grid[i][j][2] == "sulfurFactory"){
                    factory++;
                }
            }
        }

        // Energy update 
        prodRation += 0.5 + (factory * 1);
        materials += prodRation;
        
        if(materials < 0){
            materials = 0;
        }else if(materials > maxMaterials){
            materials = maxMaterials;
        }

        // Notifications -> Materials

        fillBarRatio = (materials / maxMaterials) * 100;

        stocks[2].innerHTML = `${Math.trunc(materials)} / ${Math.trunc(maxMaterials)}`;
        prod[2].innerHTML = `${prodRation.toFixed(2)} / s`;
        fillerBar[2].style.width = `${fillBarRatio}%`;
        fillerBar[2].style.background = "#555453";

        // Notifications -> Population

        stocksPop.innerHTML = Math.round(pilgrims);

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


// Building Selection from DOM

const buildingButtons = document.querySelectorAll('.buildingsButtons');

for(let i = 0; i < buildingButtons.length; i++){
    buildingButtons[i].addEventListener(
        'click',
        (event)=> {
            event.preventDefault();
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
    condition: [],
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
    condition: ["headQuarters"],
    materialsPrice: 10,
    materialsProduction: 0,
    materialLimit: 0,
    energyPrice: 10,
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
    condition: ["headQuarters", "D3Printer"],
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
    condition: ["headQuarters", "D3Printer"],
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
    condition: ["headQuarters", "D3Printer", "hydroOxygenComplex"],
    materialsPrice: 20,
    materialsProduction: 0,
    materialLimit: 0,
    energyPrice: 20,
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
    condition: ["headQuarters", "D3Printer", "solarTurbine"],
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
    condition: ["headQuarters", "D3Printer", "greenhouse"],
    materialsPrice: 50,
    materialsProduction: 0,
    materialLimit: 0,
    energyPrice: 50,
    energyProduction: 0,
    energyUsed: 10,
    energyLimit: 0,
    foodProduction: 0,
    foodLimit: 20,
    pop: 0
}

const battery = {
    name: "Battery",
    gameName: "battery",
    description: "",
    condition: ["headQuarters", "D3Printer", "solarTurbine"],
    materialsPrice: 80,
    materialsProduction: 0,
    materialLimit: 0,
    energyPrice: 150,
    energyProduction: 0,
    energyUsed: 10,
    energyLimit: 50,
    foodProduction: 0,
    foodLimit: 0,
    pop: 0
}

const warehouse = {
    name: "Warehouse",
    gameName: "warehouse",
    description: "",
    condition: ["headQuarters", "D3Printer", "sulfurFactory"],
    materialsPrice: 100,
    materialsProduction: 0,
    materialLimit: 50,
    energyPrice: 200,
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
    condition: ["headQuarters", "D3Printer", "drill"],
    materialsPrice: 250,
    materialsProduction: 0,
    materialLimit: 0,
    energyPrice: 300,
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
    condition: ["headQuarters", "D3Printer", "sulfurFactory"],
    materialsPrice: 35,
    materialsProduction: 0,
    materialLimit: 0,
    energyPrice: 50,
    energyProduction: 0,
    energyUsed: 10,
    energyLimit: 0,
    foodProduction: 0,
    foodLimit: 0,
    pop: 20
}

const sickBay = {
    name: "Sick Bay",
    gameName: "sickBay",
    description: "",
    condition: ["headQuarters", "D3Printer", "sulfurFactory", "houses"],
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
    condition: ["headQuarters", "D3Printer", "houses"],
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
    condition: ["headQuarters", "D3Printer", "solarTurbine"],
    materialsPrice: 200,
    materialsProduction: 0,
    materialLimit: 0,
    energyPrice: 300,
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
    condition: ["headQuarters", "D3Printer", "houses", "sickBay", "sportsHall"],
    materialsPrice: 300,
    materialsProduction: 0,
    materialLimit: 0,
    energyPrice: 350,
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

// Icon change depending on building disponibility

setInterval(
    () =>{
    let conditions = true;
        for(let i = 1; i < buildings.length; i++){
            conditions = true;
            for(let j = 0; j < buildings[i].condition.length; j++){
                let bool = false;
                for(let fuuf = 0; fuuf < grid.length; fuuf++){
                    for(let jeej = 0; jeej < grid.length; jeej++){
                        if(grid[fuuf][jeej][2] == buildings[i].condition[j]){
                            bool = true;
                        }
                    }
                }
                if(bool == false){
                    conditions = false;
                }
            }
            if(conditions == true){
                if((materials >= buildings[i].materialsPrice) && (energy >= buildings[i].energyPrice)){
                    buildingButtons[i-1].style.background = "rgb(35, 35, 35)";
                }else{
                    buildingButtons[i-1].style.background = "red";
                }
            }else{
                buildingButtons[i-1].style.background = "red";
            }
        }
    },
    100
);

// Tutorial

let tutorialState = 7;
    tutoComplete = false;
    waitingFor = false;

if(tutorialState != 8){
    setInterval(
        () =>{

            if(tutorialState == 7){
                food = maxFood;
                materials = maxMaterials;
                energy = maxEnergy;
                buildingButtons[8].style.animation = "flashingYellow 2s infinite";
                popupDiv.style.display = "block";
                popupTitle.innerHTML = "Welcome to SpaceX Mars Colony";
                popupText[0].innerHTML = "Your goal is to create a launch ramp to launch your spacecraft back to earth, making Mars a Human Colony...";
                popupText[1].innerHTML = "And humans, a multiplanet species.";
                document.addEventListener(
                    'click',
                    () =>{
                        popupDiv.style.display = "none";
                        buildingButtons[8].style.animation = "";
                        tutorialState = 6;
                    }
                );
            }else if(tutorialState == 6){
                
                food = maxFood;
                materials = maxMaterials;
                energy = maxEnergy;
                popupDiv.style.display = "block";
                popupTitle.innerHTML = "These are your resources.";
                popupText[0].innerHTML = "Each buildings consumes some energy. Energy is generated thanks to the wind-solar turbine.";
                popupText[1].innerHTML = "This is your food, 20 pilgrims consumes 1(logo Food)/secondes.";
                popupText[2].innerHTML = "The materials are your resources to create building.";
                fillerBar[0].style.animation = "flashing 2s infinite";
                fillerBar[1].style.animation = "flashing 2s infinite";
                fillerBar[2].style.animation = "flashing 2s infinite";
                document.addEventListener(
                    'click',
                    () =>{
                        fillerBar[0].style.animation = "";
                        fillerBar[1].style.animation = "";
                        fillerBar[2].style.animation = "";
                        popupDiv.style.display = "none";
                        tutorialState = 5;
                    }
                );
            }else if(tutorialState == 5){
                food = maxFood;
                materials = maxMaterials;
                energy = maxEnergy;
                buildingButtons[0].style.animation = "flashingGreen 2s infinite";
                if(waitingFor == false){
                    popupDiv.style.display = "block";
                    popupTitle.innerHTML = "Lets Start !";
                    popupText[0].innerHTML = "Click here to select the building you want to create, then click on the map to place it.";
                    popupText[1].innerHTML = "To build on Mars you need a 3D Printer, which is right there. ";
                    popupText[2].innerHTML = "";
                }
                document.addEventListener(
                    'click',
                    () =>{        
                        popupDiv.style.display = "none";
                        waitingFor = true;
                        for(let i = 0; i < grid.length; i++){
                            for(let j = 0; j < grid.length; j++){
                                if(grid[i][j][2] == "D3Printer"){
                                    waitingFor = false;
                                    buildingButtons[0].style.animation = "";
                                    tutorialState = 4;
                                }
                            }
                        }
                    }
                );
            }else if(tutorialState == 4){
                food = maxFood;
                materials = maxMaterials;
                energy = maxEnergy;
                buildingButtons[1].style.animation = "flashingGreen 2s infinite";
                buildingButtons[3].style.animation = "flashingYellow 2s infinite";
                if(waitingFor == false){
                    popupDiv.style.display = "block";
                    popupTitle.innerHTML = "Dont starve !";
                    popupText[0].innerHTML = "The Hydro-Oxygen Complex is essential to start making food and ensure your pilgrim’s life.";
                    popupText[1].innerHTML = "Most of all, it will unlock your main food building: the greenhouse.";
                    popupText[2].innerHTML = "You’d better build it fast.";
                }
                document.addEventListener(
                    'click',
                    () =>{
                        popupDiv.style.display = "none";
                        waitingFor = true;
                        for(let i = 0; i < grid.length; i++){
                            for(let j = 0; j < grid.length; j++){
                                if(grid[i][j][2] == "hydroOxygenComplex"){
                                    waitingFor = false;
                                    buildingButtons[1].style.animation = "";
                                    buildingButtons[3].style.animation = "";
                                    tutorialState = 3;
                                }
                            }
                        }
                    }
                );
            }else if(tutorialState == 3){
                food = maxFood;
                materials = maxMaterials;
                energy = maxEnergy;
                buildingButtons[2].style.animation = "flashingGreen 2s infinite";
                if(waitingFor == false){
                    popupDiv.style.display = "block";
                    popupTitle.innerHTML = "Critical energy";
                    popupText[0].innerHTML = "Watch out !";
                    popupText[1].innerHTML = "You’re starting to lose energy, you’d better fix this quickly.";
                    popupText[2].innerHTML = "";
                }
                document.addEventListener(
                    'click',
                    () =>{
                        popupDiv.style.display = "none";
                        waitingFor = true;
                        for(let i = 0; i < grid.length; i++){
                            for(let j = 0; j < grid.length; j++){
                                if(grid[i][j][2] == "solarTurbine"){
                                    waitingFor = false;
                                    buildingButtons[2].style.animation = "";
                                    tutorialState = 2;
                                }
                            }
                        }
                    }
                );
            }else if(tutorialState == 2){
                food = maxFood;
                materials = maxMaterials;
                energy = maxEnergy;
                buildingButtons[4].style.animation = "flashingGreen 2s infinite";
                if(waitingFor == false){
                    popupDiv.style.display = "block";
                    popupTitle.innerHTML = "Industrialisation";
                    popupText[0].innerHTML = "Waow ! You’re a real builder !";
                    popupText[1].innerHTML = "You will fall short of materials quickly, the factory can help you get more materials.";
                }
                document.addEventListener(
                    'click',
                    () =>{
                        popupDiv.style.display = "none";
                        waitingFor = true;
                        for(let i = 0; i < grid.length; i++){
                            for(let j = 0; j < grid.length; j++){
                                if(grid[i][j][2] == "sulfurFactory"){
                                    waitingFor = false;
                                    buildingButtons[4].style.animation = "";
                                    tutorialState = 1;
                                }
                            }
                        }
                    }
                );
            }else if(tutorialState == 1){
                food = maxFood;
                materials = maxMaterials;
                energy = maxEnergy;
                buildingButtons[9].style.animation = "flashingYellow 2s infinite";
                popupDiv.style.display = "block";
                popupTitle.innerHTML = "Population";
                popupText[0].innerHTML = "One last thing: Your actual population only allows you to build a few buildings.";
                popupText[1].innerHTML = "Build houses to increase your population and watch out for starvation !";
                document.addEventListener(
                    'click',
                    () =>{
                        buildingButtons[9].style.animation = "";
                        tutorialState = 0;
                    }
                );
            }else if(tutorialState == 0){
                food = maxFood;
                materials = maxMaterials;
                energy = maxEnergy;
                popupDiv.style.display = "block";
                popupTitle.innerHTML = "Good luck !";
                popupText[0].innerHTML = "We wish you good luck for SpaceX Mars Colonisation";
                popupText[1].innerHTML = "Try to send back the spacecraft as quick as possible to be n°1 in the Highscores !";
                document.addEventListener(
                    'click',
                    () =>{
                        tutorialState = 8;
                    }
                );
            }else if((tutorialState == 8) && (tutoComplete == false)){
                if(waitingFor == false){
                    let tab = [];
                    for(let i = 2; i < app.stage.children.length; i++){
                        tab.push(i);
                    }
                    for(i = tab.length; i > 1; i--){
                        app.stage.removeChildAt(i);
                    }
                    for(let i = 0; i < grid.length; i++){
                        for(let j = 0; j < grid.length; j++){
                            if((grid[i][j][2] != 0) && ((grid[i][j][2] != "headQuarters"))){
                                grid[i][j][2] = 0;
                                grid[i][j][3] = "Bollocks";
                            }
                        }
                    }
                    popupDiv.style.display = "none";
                }
                waitingFor = true;
                tutoComplete = true;
                console.log(tutoComplete);
            }
        },
        100
    )
}