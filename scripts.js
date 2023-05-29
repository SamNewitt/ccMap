var panZoom = svgPanZoom('#svg-container');
window.onload = init();
function init(){
   
   if(window.innerHeight*1.95333>window.innerWidth){
    document.getElementById("map").style.height='auto';
   
    document.getElementById("map").style.width="100%";
    document.getElementById("map").setAttribute("y", (panZoom.getSizes().height-document.getElementById("map").getBBox().height)/2);

   }
   else{
    document.getElementById("map").style.width='auto';
   
   document.getElementById("map").style.height="100%";
   document.getElementById("map").setAttribute("x", (panZoom.getSizes().width-document.getElementById("map").getBBox().width)/2);

   }
   
    var height=$("#map").height(), width=$("#map").width();

var pins = document.getElementsByClassName("pin");
pinSize=panZoom.getSizes().height/10;

for(var i=0; i<pins.length; i++){
    pins[i].setAttribute("height",pinSize/panZoom.getZoom());
pins[i].setAttribute("y",pins[i].getAttribute("ypos")*height+(panZoom.getSizes().height-height)/2-pins[i].getBBox().height);
 pins[i].setAttribute("x",pins[i].getAttribute("xpos")*width+(panZoom.getSizes().width-width)/2-pins[i].getBBox().width/2);
        pins[i].addEventListener("mousedown",setTargetPin);
pins[i].addEventListener("mouseover",function(){this.setAttribute("href", "pinHover.svg")});
pins[i].addEventListener("mouseout",function(){this.setAttribute("href", "pin.svg")});



}

    
   
        
    
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
       allCloses=document.getElementsByClassName("info-close");
    if(Math.abs(mouseX-e.clientX)<5&&Math.abs(mouseY-e.clientY)<5){
        console.log(targetPin);
    for(var i=0; i<allInfos.length;i++){
        console.log(allInfos[i].getAttribute("name"));
        if(allInfos[i].getAttribute("name")==targetPin){
            info=i;
        }
    }
    document.getElementById("info").style.display="flex";
    document.getElementById("info").style.animation="opacityIn 0.2s linear 0s";
    allCloses[info].style.display="none";
    setTimeout(function(){
        document.getElementById("info-animate").style.display="flex";
        document.getElementById("info-animate").style.animation="infoIn 0.5s ease 0s";
    },200);
    setTimeout(function(){
        allInfos[info].style.display="flex";
        allInfos[info].style.overflow="hidden";
       allInfos[info].style.animation="infoIn 0.5s ease 0s";
    },700);
    setTimeout(function(){
    allCloses[info].style.display="block";
       allMedias[info].style.animation="opacityIn 0.2s linear 0s";
       allCloses[info].style.animation="opacityIn 0.2s linear 0s";
       allInfos[info].style.overflow="auto";
    },1200);
    
    

    }

 
 }
 function closePin(){
    document.getElementById("info").style.animation="opacityOut 0.2s linear 0s";
    document.getElementById("info-animate").style.animation="opacityOut 0s linear 0s";
    allInfos[info].style.animation="opacityOut 0.2s linear 0s";
    allMedias[info].style.animation="opacityOut 0.2s linear 0s";
    allCloses[info].style.animation="opacityOut 0.2s linear 0s";

    setTimeout(function(){
    document.getElementById("info").style.display="none";
    document.getElementById("info-animate").style.display="none";
    allInfos[info].style.display="none";
    },200);


    
 }