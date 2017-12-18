
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


const menuLaunch = () => {
    const starSet = () => {
        //CREATE PARTICLES
        const particles = []
        const create = () => {
            for(i=0;i<800;i++){
                const particle ={}
                particle.x= (Math.random() * canvas.width)    
                particle.y= (Math.random() * canvas.height)   
                particles.push(particle)
                particle.color='rgba(255, 255,255, 1)'
                particle.luminosity="1"
                particle.radius=Math.random() * 2
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
        
                //Color effect
                let currentLumi=particle.luminosity
                let lumiSign=Math.round(Math.random())
                let lumiChange= Math.random() * 0.2
                if(lumiSign == 1){
                    if((particle.luminosity + lumiChange) < 1){
                        particle.color = `rgba(255, 255,255, ${currentLumi += lumiChange})`
                    }
                }
                else if (lumiSign == 0) {
                    if ( (Math.round(particle.luminosity)) - lumiChange > 0.001){
                        particle.color = `rgba(255, 255,255, ${currentLumi -= lumiChange})`
                    }
                }
                
                //Deleting
                if (particle.x < 0 || particle.x > canvas.width || particle.y < 0 || particle.y > canvas.height)
                {
                particles.splice(i,1)   
                }
            }   
        }
    
        //DRAWING THEM
        const draw = () => 
        {
            context.globalCompositeOperation="source-over"
            for(const particle of particles)
            {
                context.beginPath()
                context.arc(particle.x,particle.y,particle.radius,0,Math.PI * 2)
                context.fillStyle=particle.color
                context.fill()
            }
            
        }
        //CLEARING THEM
        const clear = () => {
            context.clearRect(0,0,canvas.width,canvas.height)
        }
        create()
    
        const loop = () =>{
            window.requestAnimationFrame(loop)
            
            update()
            clear()
            draw()
            
        }
        loop()
    
    }
    starSet()
    const menuSet = () => {
        
    }


} 



