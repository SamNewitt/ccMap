var height, width, pinSize;
var targetPin, mouseX, mouseY, mousePrevX, mousePrevY;
var info, allInfos, allMedias, allCloses;
var pins = document.getElementsByClassName("pin");

var panZoom = svgPanZoom('#svg-container');

function setMap(){
    document.getElementById("map").setAttribute("x",0);
    document.getElementById("map").setAttribute("y",0);

    if(window.innerHeight*1.95333>window.innerWidth){
        document.getElementById("map").style.height='auto';
       
        document.getElementById("map").style.width="100%";
        document.getElementById("map").setAttribute("y", (window.innerHeight-document.getElementById("map").getBBox().height)/2);
        document.getElementById("map").setAttribute("x",0);

    
       }
       else{
        document.getElementById("map").style.width='auto';
       
       document.getElementById("map").style.height="100%";
       document.getElementById("map").setAttribute("x", (window.innerWidth-document.getElementById("map").getBBox().width)/2);
       document.getElementById("map").setAttribute("y",0);
    
       }
       height=document.getElementById("map").getBoundingClientRect().height;
    width=document.getElementById("map").getBoundingClientRect().width; 

    if(window.innerHeight*1.335>window.innerWidth){
        document.getElementById("local-svg").style.width="95%";
        document.getElementById("local-svg").style.height="auto";
    }
    else{
        document.getElementById("local-svg").style.height="95%";
        document.getElementById("local-svg").style.width="auto"; 
    }
}

function resize(){
    // pinSize=panZoom.getSizes().height/10;
    pinSize=Math.min(window.innerHeight/13,window.innerWidth/16);


    for(var i=0; i<pins.length; i++){
    if(pins[i].classList.contains("local-pin")==false){
            pins[i].setAttribute("height",pinSize/panZoom.getZoom());
            pins[i].setAttribute("width",pinSize/panZoom.getZoom()*0.69);
         pins[i].setAttribute("y",pins[i].getAttribute("ypos")*height+(window.innerHeight-height)/2-pins[i].getBBox().height);
          pins[i].setAttribute("x",pins[i].getAttribute("xpos")*width+(window.innerWidth-width)/2-pins[i].getBBox().width/2);
        }
    }

}
function init(){
    
setMap();
resize();

for(var i=0; i<pins.length; i++){

pins[i].addEventListener("mousedown",setTargetPin);
pins[i].style.opacity="1";
pins[i].addEventListener("mouseover",pinHoverIn);
pins[i].addEventListener("mouseout",pinHoverOut);


}

document.getElementById("info-close").addEventListener("mouseover",function(){this.setAttribute("src", "xHover.svg")});
document.getElementById("info-close").addEventListener("mouseout",function(){this.setAttribute("src", "x.svg")});
window.addEventListener("mouseup", openPin);
       
}



function pinHoverIn(){
if(this.classList.contains("sf"))
{
    this.setAttribute("href", "pinHover.svg");
}
else{
    this.setAttribute("href", "pinHover.svg");
}
}


function pinHoverOut(){
    if(this.classList.contains("sf"))
    {
        this.setAttribute("href", "pin.svg");
    }
    else{
        this.setAttribute("href", "pin.svg");
    }
    }



function setTargetPin(e){
   targetPin=this.getAttribute("name");
    mouseX=e.clientX;
    mouseY=e.clientY;
 }

 function openPin(e){
  
     allInfos=document.getElementsByClassName("info-container");
      allMedias=document.getElementsByClassName("info-media");
    if(Math.abs(mouseX-e.clientX)<5&&Math.abs(mouseY-e.clientY)<5){
        if(targetPin=="SF"){
            document.getElementById("local-animation").style.animation="localIn 0.5s ease 0s"
            setTimeout(function(){
                document.getElementById("local-container").style.display="flex";
                document.getElementById("local-animation").style.animation="localOut 0.5s ease 0s"
            },500);
                }

    else{
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

 function closeLocal(){
    document.getElementById("local-container").style.animation="opacityOut 0.5s linear 0s";
    setTimeout(function(){
        document.getElementById("local-container").style.display="none";
        document.getElementById("local-container").style.animation="";


    },500);
 }