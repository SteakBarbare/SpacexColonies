
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
    let logo = PIXI.Sprite.fromImage('images/logo.png')
    logo.scale.x=0.5
    logo.scale.y=0.5
    logo.x=200
    logo.y=100
    app.stage.addChild(logo)
    app.stage.addChild(earth)
    
}

//PARRALAX
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
    tiltCanv(document.querySelector("div"))
}
loop()

// ;(function ( $ ) {
//     //Make your content a heroe
//     $.fn.transformHeroes = function() {
//         //Variables
//         var perspective = '500px',
//         delta = 20,
//         width = this.width(),
//         height = this.height(),
//         midWidth = width / 2,
//         midHeight = height / 2;
//         //Events
//         this.on({
//             mousemove: function(e) {
//                 var pos = $(this).offset(),
//                 cursPosX = e.pageX - pos.left,
//                 cursPosY = e.pageY - pos.top,
//                 cursCenterX = midWidth - cursPosX,
//                 cursCenterY = midHeight - cursPosY;
  
//                 $(this).css('transform','perspective(' + perspective + ') rotateX('+ (cursCenterY / delta) +'deg) rotateY('+ -(cursCenterX / delta) +'deg)');
//                 $(this).removeClass('is-out');
//             },
//             mouseleave: function() {
//                 $(this).addClass('is-out');
//             }
//         });
//         //Return
//         return this;
//     };
//   }( jQuery ));
  
//   //Set plugin on cards
//   $('.card').transformHeroes();


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