
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


        const clear = () => {
            context.clearRect(0,0,canvas.width,canvas.height)
            
        }

        //CREATE PARTICLES
        const particles = []
        const create = () => {
            for(i=0;i<1000;i++){    
                const particle ={}
                particle.x= (Math.random() * canvas.width)    
                particle.y= (Math.random() * canvas.height)   
                particles[i]=particle
                particle.color='rgba(255, 255,255, 1)'
                particle.radius=Math.random() * 1.5    
            }
            
        }
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
        create()  
        const loop = () =>{
            window.requestAnimationFrame(loop)
            clear()
            draw()
            
        }
        loop()
    }   
    starSet()
    const menuSet = () => {   
    }
} 
menuLaunch()