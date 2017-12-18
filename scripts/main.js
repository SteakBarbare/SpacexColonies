
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
app.renderer.autoResize = true;
document.body.appendChild(app.view)
const canvas =  document.querySelector("canvas")

//LUCAS
//EARTH
loader
    .add("images/earth.png")
    .add("images/logo.png")
    .load(setup);
function setup() {
    let earth = new Sprite(resources["images/earth.png"].texture)
    earth.x=100;
    let logo = new Sprite(resources["images/logo.png"].texture)
    logo.scale.x=0.5
    logo.scale.y=0.5
    logo.x=200
    logo.y=100
    app.stage.addChild(logo)
    app.stage.addChild(earth)
    
}



const menuLaunch = () => {
    const starSet = () => {
        //CREATE PARTICLES
        for(i=0;i<2000;i++){    
            let x= (Math.random() * canvas.width)    
            let y= (Math.random() * canvas.height)   
            let radius=Math.random() * 1.5  
            let star = new PIXI.Graphics()
            star.beginFill(0xFFFFFF)
            star.drawCircle(x,y,radius)
            app.stage.addChild(star);
            
        }  
    }   
    starSet()
    const menuSet = () => {   
    }
} 
menuLaunch()
//FIN LUCAS