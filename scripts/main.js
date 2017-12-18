
//SETUP

let Application = PIXI.Application,
loader = PIXI.loader,
resources = PIXI.loader.resources,
Sprite = PIXI.Sprite
//Create a Pixi Application
let app = new Application({ 
    width: 3000, 
    height: 3000,                       
    antialias: true, 
    transparent: false, 
    resolution: 1,
    forceCanvas: true
})
document.body.appendChild(app.view)
const canvas =  document.querySelector("canvas")
const context = canvas.getContext("2d")

const starSet = () => {
    
}

