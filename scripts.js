var panZoom = svgPanZoom('#svg-container');
window.onload = init();
window.addEventListener('resize', init, true);
function init(){
 
   if(window.innerHeight*1.95333>window.innerWidth){
    document.getElementById("map").style.height='auto';
   
    document.getElementById("map").style.width="100%";
    document.getElementById("map").setAttribute("y", (window.innerHeight-document.getElementById("map").getBBox().height)/2);

   }
   else{
    document.getElementById("map").style.width='auto';
   
   document.getElementById("map").style.height="100%";
   document.getElementById("map").setAttribute("x", (window.innerWidth-document.getElementById("map").getBBox().width)/2);

   }
   
    var height=document.getElementById("map").getBoundingClientRect().height;
    var width=document.getElementById("map").getBoundingClientRect().width;
    console.log(height);
    console.log(width);


var pins = document.getElementsByClassName("pin");
pinSize=window.innerHeight/10;

for(var i=0; i<pins.length; i++){
    pins[i].setAttribute("height",pinSize/panZoom.getZoom());
pins[i].setAttribute("y",pins[i].getAttribute("ypos")*height+(window.innerHeight-height)/2-pins[i].getBBox().height);
 pins[i].setAttribute("x",pins[i].getAttribute("xpos")*width+(window.innerWidth-width)/2-pins[i].getBBox().width/2);
pins[i].addEventListener("mousedown",setTargetPin);
pins[i].addEventListener("mouseover",function(){this.setAttribute("href", "pinHover.svg")});
pins[i].addEventListener("mouseout",function(){this.setAttribute("href", "pin.svg")});
pins[i].style.opacity="1";


}

document.getElementById("info-close").addEventListener("mouseover",function(){this.setAttribute("src", "xHover.svg")});
document.getElementById("info-close").addEventListener("mouseout",function(){this.setAttribute("src", "x.svg")});





   
        
    
}

var targetPin, mouseX, mouseY, mousePrevX, mousePrevY;
var info, allInfos, allMedias, allCloses;

window.addEventListener("mouseup", openPin)


function setTargetPin(e){
   targetPin=this.getAttribute("name");
    mouseX=e.clientX;
    mouseY=e.clientY;
 }

 function openPin(e){
     allInfos=document.getElementsByClassName("info-container");
      allMedias=document.getElementsByClassName("info-media");
    if(Math.abs(mouseX-e.clientX)<5&&Math.abs(mouseY-e.clientY)<5){
    for(var i=0; i<allInfos.length;i++){
       
        if(allInfos[i].getAttribute("name")==targetPin){
            info=i;
        }
    }
    document.getElementById("info").style.display="flex";
    document.getElementById("info").style.animation="opacityIn 0.2s linear 0s";
    document.getElementById("info-close").style.display="none";
    setTimeout(function(){
        document.getElementById("info-close").style.display="block";
        document.getElementById("info-animate").style.display="flex";
       document.getElementById("info-close").style.animation="opacityIn 0.2s linear 0s";

        document.getElementById("info-animate").style.animation="infoIn 0.5s ease 0s";
    },200);
    setTimeout(function(){
        allInfos[info].style.display="flex";
        allInfos[info].style.overflow="hidden";
       allInfos[info].style.animation="infoIn2 0.5s ease 0s";
    },700);
    setTimeout(function(){
    
       allMedias[info].style.animation="opacityIn 0.5s linear 0s";
       allInfos[info].style.overflow="auto";
    },1200);
    
    

    }

 
 }
 function closePin(){
    document.getElementById("info").style.animation="opacityOut 0.2s linear 0s";
    document.getElementById("info-animate").style.animation="opacityOut 0s linear 0s";
    allInfos[info].style.animation="opacityOut 0.2s linear 0s";
    allMedias[info].style.animation="opacityOut 0.2s linear 0s";
    document.getElementById("info-close").style.animation="opacityOut 0.2s linear 0s";

    setTimeout(function(){
        allInfos[info].style.display="none"
    document.getElementById("info").style.display="none";
    document.getElementById("info-animate").style.display="none";
    document.getElementById("info-close").style.display="none";
    },200);


    
 }