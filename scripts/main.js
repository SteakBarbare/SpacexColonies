// const mouse = {x: 0, y: 0}
// console.log(mouse.x, mouse.y)
// //Saving mouse coordinates during mouse move
// document.addEventListener('mousemove',(event) =>{
//     mouse.x = event.clientX
//     mouse.y = event.clientY
// })

// //Create a Pixi Application
// let app = new PIXI.Application({ 
//     width: 3000, 
//     height: 3000,                       
//     antialias: true, 
//     transparent: false, 
//     resolution: 1,
//     forceCanvas: true,
//   }
// )

// //Add the canvas that Pixi automatically created for you to the HTML document
// document.body.appendChild(app.view)

// //load an image and run the `setup` function when it's done
// PIXI.loader
//   .add("images/cat.png")
//   .load(setup)
//     let cat;
// //This `setup` function will run when the image has loaded
// function setup() {
    //   //Create the cat sprite
    //   cat = new PIXI.Sprite(PIXI.loader.resources["images/cat.png"].texture)
//   //Add the cat to the stage
//   app.stage.addChild(cat)
// }

// document.addEventListener('mousemove', (event) => {
    //     cat.x = mouse.x - (cat.width/2)
    //     cat.y = mouse.y - (cat.height/2)
// })

// document.addEventListener('click', (event) => {
    //     setup()
    // })
    
    //Type of buildings Array
const buildings = ["HeadQuarters", "Farm", "EnergyGenerator"]
let buildingName = "HeadQuarters";
const $green = document.querySelector('.green')
const $red = document.querySelector('.red')
const $yellow = document.querySelector('.yellow')


$green.addEventListener('click', (event)=>
{
    buildingName = buildings[0]
    app.stage.removeChild(sprite);
    setup();
    console.log(buildingName)
})


$red.addEventListener('click', (event)=>
{
    buildingName = buildings[1]
    app.stage.removeChild(sprite);
    setup();
    console.log(buildingName)
})


$yellow.addEventListener('click', (event)=>
{
    buildingName = buildings[2]
    console.log(buildingName)    
})

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


// Ressources

let energy = 0,
materials = 0,
pilgrims = 20,
food = 10;

// Grid Ini

let grid = new Array(30);

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
        if(grid[coordX][coordY][2] == 0){
            setup();
            grid[coordX][coordY][2] = 1
        }else{
            console.log('Pute');
        }
    }
)

// Ressources Depletion

const actualFood = document.querySelector('.food');
const actualPilgrims = document.querySelector('.pilgrims');

setInterval(
    ()=>{
        food -= 0.05 * pilgrims;
        if(food < 0){
            food = 0;
        }   
    },
    1000
);

setInterval(
    ()=>{
        actualFood.innerHTML = `Food Left: ${Math.trunc(food)}`; 
        actualPilgrims.innerHTML = `Pilgrims Alive: ${pilgrims}`;
    },
    100
);


setInterval(
    ()=>{
        if(food <= 0){
            pilgrims -= 1;
        }
    },
    5000
);