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
    .load(setup);
    let earth;
function setup() {
    
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
        elem.addEventListener("mouseover",(event) => {
            
            
        })
    })
    document.addEventListener("mouseout",(event) => {
        elem.classList.add("isOut")
    })
}
const loop = () => {
    window.requestAnimationFrame(loop)
    tiltCanv(document.querySelector(".selecPlay"))
}
loop()
const menuLaunch = () => {
    //variable
    const starSet = () => {
        const starArray = []
        //CREATE PARTICLES
        for(i=0;i<1000;i++){    
            let x= (Math.random() * document.body.offsetWidth)    
            let y= (Math.random() * document.body.offsetHeight)   
            let radius=Math.random() * 1.5  
            let star = new PIXI.Graphics()
            starArray[i]=star
            star.beginFill(0xFFFFFF)
            star.drawCircle(x,y,radius)
            app.stage.addChild(star);
            
        }  
    }   
    starSet()
    const earthArea = document.querySelector(".earthArea")
    const menuSet = () => {  
        //VARIABLES
        let menuState = 0
        const actionB = document.querySelector(".selecPlay")
        const logoTitle =document.querySelector(".logoTitle")
        const goalArea = document.querySelector(".goalArea")
        const bottomLink= document.querySelector(".bottomLink")
        const interactiveMenu=document.querySelector(".interactiveMenu")
        const hyperSpace= document.querySelector(".hyperSpace")
        // const organicCircle = (elem) => {
        //     document.addEventListener("mousemove",(event) => {
        //         cursorX = event.clientX,
        //         cursorY = event.clientY,
        //         posELemX = elem.offsetLeft,
        //         posELemY = elem.offsetTop,
        //         xRatio=posELemX - cursorX,
        //         yRatio=posELemY - cursorY
        //         // const circleAttractFar = (elem) => {
        //         //     const tendX = xRatio-15
        //         //     const tendY = yRatio-15
        //         //     elem.style.transform="translate3d(-"+tendX+"px,-"+tendY+"px,0)"
        //         //     console.log(elem.style.transform)
        //         // }
                
        //         if(xRatio < 0 && xRatio > -70 && yRatio < 0 && yRatio > -70){
        //             elem.style.animation="expend 0.2s both"
        //             elem.style.backgroundImage="url('images/x.png')"
        //         }
        //         else if(xRatio <100 && yRatio<100){
        //             elem.style.animation=""
        //             elem.style.backgroundImage=""
        //             // circleAttractFar(elem)
                    
        //         }
        //         else{
        //             elem.style.animation="pulse 3s infinite"
                    
        //         }
        //     })
        // }
        // organicCircle(earthArea)  
        // //EarthAREA interaction
        // const infoEarth=document.querySelector(".infoEarth")
        // let infoAppeared=0
        // earthArea.addEventListener("click",() => {
        //     if (infoAppeared == 0){
        //         infoEarth.style.animation="entranceRight 0.4s forwards"
        //         infoAppeared=1

        //     }
        //     else {
        //         infoEarth.style.animation="exitRight 0.4s forwards "
        //         infoAppeared=0
                
        //     }
        // })

        //PlayButton

        
        actionB.addEventListener("click", (event) => {
            
            if (menuState == 0){

                const hyperSpaceStage = () => {
                    hyperSpace.style.display="inline-block"
                    canvas.style.opacity=0
                    interactiveMenu.style.opacity=0
                    actionB.style.opacity=0
                    document.body.style.background="black"
                    hyperSpace.style.transform="scale(0.5)"
                    setTimeout(function(){
                        canvas.style.opacity=1
                        interactiveMenu.style.opacity=1
                        actionB.style.opacity=1
                        hyperSpace.style.display="none"
                        midMenuStage()
                    },4400)

                }
                hyperSpaceStage()

                const midMenuStage = () => {
                    
                    actionB.innerHTML="P L A Y"
                    logoTitle.style.transform="translateX(-400px)"
                    goalArea.style.opacity=1
                    bottomLink.style.opacity=1
                    

                }

    
            }
        })
        
    }
    menuSet()

} 
menuLaunch()
//FIN LUCAS