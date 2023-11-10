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
        document.getElementById("local-svg").style.height="calc(95vw*1/1.335)";
        document.getElementById("ethiopia-svg").style.width="95%";
        document.getElementById("ethiopia-svg").style.height="calc(95vw*1/1.335)";
    }
    else{
        document.getElementById("local-svg").style.height="95%";
        document.getElementById("local-svg").style.width="calc(95vh*1.335)"; 
        document.getElementById("ethiopia-svg").style.height="95%";
        document.getElementById("ethiopia-svg").style.width="calc(95vh*1.335)"; 
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

if(pins[i].classList.contains("or")){
pins[i].setAttribute("href", "pins/pinRed.svg");
}
if(pins[i].classList.contains("cp")){
pins[i].setAttribute("href", "pins/pinYellow.svg");
}
if(pins[i].classList.contains("ip")){
pins[i].setAttribute("href", "pins/pinGreen.svg");
}
if(pins[i].classList.contains("lp")){
pins[i].setAttribute("href", "pins/pinBlue.svg");
}


if(pins[i].classList.contains("or-kf")){
    pins[i].setAttribute("href", "pins/pinSolidRed.svg");
    }
    if(pins[i].classList.contains("cp-kf")){
    pins[i].setAttribute("href", "pins/pinSolidYellow.svg");
    }
    if(pins[i].classList.contains("ip-kf")){
    pins[i].setAttribute("href", "pins/pinSolidGreen.svg");
    }
    if(pins[i].classList.contains("lp-kf")){
    pins[i].setAttribute("href", "pins/pinSolidBlue.svg");
    }


 if(pins[i].classList.contains("inset")){
    pins[i].setAttribute("href", "pins/pinGray.svg");
    }

}

document.getElementById("info-close").addEventListener("mouseover",function(){this.setAttribute("src", "xHover.svg")});
document.getElementById("info-close").addEventListener("mouseout",function(){this.setAttribute("src", "x.svg")});
window.addEventListener("mouseup", openPin);
       

var headings = document.querySelectorAll(".info-container h1");
for(var i=0; i<headings.length; i++)
{
    headings[i].innerHTML= headings[i].innerHTML.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}
}



function pinHoverIn(){
if(this.classList.contains("or")){
this.setAttribute("href", "pins/pinRedHover.svg");
}
else if(this.classList.contains("cp")){
this.setAttribute("href", "pins/pinYellowHover.svg");
}
else if(this.classList.contains("ip")){
this.setAttribute("href", "pins/pinGreenHover.svg");
}
else if(this.classList.contains("lp")){
this.setAttribute("href", "pins/pinBlueHover.svg");
}

else if(this.classList.contains("or-kf")){
    this.setAttribute("href", "pins/pinSolidRedHover.svg");
    }
    else if(this.classList.contains("cp-kf")){
    this.setAttribute("href", "pins/pinSolidYellowHover.svg");
    }
    else if(this.classList.contains("ip-kf")){
    this.setAttribute("href", "pins/pinSolidGreenHover.svg");
    }
    else if(this.classList.contains("lp-kf")){
    this.setAttribute("href", "pins/pinSolidBlueHover.svg");
    }

else if(this.classList.contains("inset")){
    this.setAttribute("href", "pins/pinGrayHover.svg");
    }
else{
    this.setAttribute("href", "pins/pinHover.svg");
}
}


function pinHoverOut(){
    if(this.classList.contains("or")){
        this.setAttribute("href", "pins/pinRed.svg");
        }
        else if(this.classList.contains("cp")){
        this.setAttribute("href", "pins/pinYellow.svg");
        }
        else if(this.classList.contains("ip")){
        this.setAttribute("href", "pins/pinGreen.svg");
        }
        else if(this.classList.contains("lp")){
        this.setAttribute("href", "pins/pinBlue.svg");
        }
       
     else if(this.classList.contains("or-kf")){
            this.setAttribute("href", "pins/pinSolidRed.svg");
            }
            else if(this.classList.contains("cp-kf")){
            this.setAttribute("href", "pins/pinSolidYellow.svg");
            }
            else if(this.classList.contains("ip-kf")){
            this.setAttribute("href", "pins/pinSolidGreen.svg");
            }
            else if(this.classList.contains("lp-kf")){
            this.setAttribute("href", "pins/pinSolidBlue.svg");
            }


        else if(this.classList.contains("inset")){
            this.setAttribute("href", "pins/pinGray.svg");
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
        if(targetPin=="Sioux Falls Ministries"){
            document.getElementById("inset-animation").style.animation="insetIn 0.5s ease 0s"
            setTimeout(function(){
                document.getElementById("local-container").style.display="flex";
                document.getElementById("inset-animation").style.animation="insetOut 0.5s ease 0s"
            },500);
         }
         else if(targetPin=="Ethiopia Ministries"){
            document.getElementById("inset-animation").style.animation="insetIn 0.5s ease 0s"
            setTimeout(function(){
                document.getElementById("ethiopia-container").style.display="flex";
                document.getElementById("inset-animation").style.animation="insetOut 0.5s ease 0s"
            },500);
         }

    else{
        info=-1;
        for(var i=0; i<allInfos.length;i++){
        if(allInfos[i].getAttribute("name")==targetPin){
            info=i;
        }
    }
    if (info!=-1)
    {
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

 function closeInset(){
    document.getElementById("local-container").style.animation="opacityOut 0.5s linear 0s";
    document.getElementById("ethiopia-container").style.animation="opacityOut 0.5s linear 0s";
    setTimeout(function(){
        document.getElementById("local-container").style.display="none";
        document.getElementById("local-container").style.animation="";
        document.getElementById("ethiopia-container").style.display="none";
        document.getElementById("ethiopia-container").style.animation="";


    },500);
 }

 function zoomIn(){
    panZoom.zoomBy(1.5);
 }

 function zoomOut(){
    panZoom.zoomBy(0.66666);
 }