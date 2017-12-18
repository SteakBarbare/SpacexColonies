
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
const context = canvas.getContext("2d")

const starSet = () => {
    //CREATE PARTICLES
    const particles = []
    const create = () => {
        for(i=0;i<400;i++){
            const particle ={}
            particle.x= (Math.random() * canvas.width)    
            particle.y= (Math.random() * canvas.height)   
            particles.push(particle)
            particle.color='white'
            particle.radius=Math.random() * 3
        }
        
    
    }
    //UPDATING THEM
    const update = () => {
        for (const particle of particles){
            //radius
            let radiusChanges = Math.random() * 0.05
            let radiusSign = Math.round(Math.random())
            if(radiusSign == 1){
                if((particle.radius + radiusChanges) < 3){
                    particle.radius += radiusChanges
                }
            }
            else if (radiusSign == 0) {
                if ( (Math.round(particle.radius)) - radiusChanges > 0.001){
                    particle.radius -= radiusChanges
                }
            }
            //deleting
            if (particle.x < 0 || particle.x > canvas.width || particle.y < 0 || particle.y > canvas.height)
            {
            particles.splice(i,1)   
            }
        }   
    }
    //CLEARING THEM
    const clear = () => {
        ctx.clearRect(0,0,canvas.width,canvas.height)
    }
    




    const loop = () =>{
        window.requestAnimationFrame(loop)
        
        update()
        clear()
        draw()
        
    }

}

