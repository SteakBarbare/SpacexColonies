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

//DEPTH MANAGING


//EARTH
loader
    .add("images/earth.png")
    .add("images/logo.png")
    .load(setup);
function setup() {
    let earth = new Sprite(resources["images/earth.png"].texture)
    earth.x=100
    app.stage.addChild(earth)
    
}

//TILT

const tiltCanv = (elem) => {
    const presp="500px",
    width=elem.offsetWidth,
    height=elem.offsetHeight,
    midWidth=width / 2,
    midHeight=height / 2

    document.addEventListener("mousemove",(event) => {
        const posTop = elem.offsetTop,
        posLeft = elem.offsetLeft,
        perspective="500px",
        cursorX = event.offsetX - posLeft,
        cursorY = event.offsetY - posTop,
        cursorCenterX = midWidth - cursorX,
        cursorCenterY = midHeight - cursorY,
        angle=20
        elem.style.transform='perspective(' + perspective + ') rotateX('+(cursorCenterY / angle) +'deg) rotateY('+ -(cursorCenterX / angle) + 'deg)';
        elem.classList.remove("isOut") 
    })
    document.addEventListener("mousemove",(event) => {
        elem.classList.add("isOut")
    })

}
const loop = () => {
    window.requestAnimationFrame(loop)
    tiltCanv(document.querySelector("#tiltTest"))
    
}
loop()




const menuLaunch = () => {
    //variable
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
        const drawRing = (name,thickness,color,x,y,radius) => {
            name = new PIXI.Graphics()
            name.lineStyle(thickness, color)
            name.drawCircle(x, y, radius)
            name.endFill()
            app.stage.addChild(name)
            

        }
        const earthArea = document.querySelector(".earthArea")
        earthArea.style.top = "80%"
        earthArea.style.left= "80%"

        
        const organicCircle = (elem) => {
            document.addEventListener("mousemove",(event) => {
                cursorX = event.clientX,
                cursorY = event.clientY,
                posELemX = elem.offsetLeft,
                posELemY = elem.offsetTop,
                xRatio=posELemX - cursorX,
                yRatio=posELemY - cursorY
                
                // const circleAttractFar = (elem) => {
                //     const tendX = xRatio-15
                //     const tendY = yRatio-15
                //     elem.style.transform="translate3d(-"+tendX+"px,-"+tendY+"px,0)"
                //     console.log(elem.style.transform)
                // }
                
                if(xRatio < 0 && xRatio > -70 && yRatio < 0 && yRatio > -70){
                    elem.style.animation="expend 0.2s both"
                    elem.style.backgroundImage="url('images/x.png')"
                
                
                }
                
                else if(xRatio <100 && yRatio<100){
                    elem.style.animation=""
                    // circleAttractFar(elem)
                    
                }
                else{
                    elem.style.animation="pulse 3s infinite"
                    elem.style.backgroundImage=""
                }

            })
        }
        organicCircle(earthArea)

        
        
        
    }
    menuSet()

} 
menuLaunch()
//FIN LUCAS