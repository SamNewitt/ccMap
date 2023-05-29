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
pinSize=document.getElementById("map").getBBox().height/10;
for(var i=0; i<pins.length; i++){
    pins[i].setAttribute("height",pinSize/panZoom.getZoom());
    pins[i].setAttribute("width",pinSize/panZoom.getZoom());
pins[i].setAttribute("y",pins[i].getAttribute("ypos")*height+(panZoom.getSizes().height-height)/2-pins[i].getBBox().height);
 pins[i].setAttribute("x",pins[i].getAttribute("xpos")*width+(panZoom.getSizes().width-width)/2-pins[i].getBBox().width/2);


        pins[i].addEventListener("mousedown",setTargetPin);


}

    
   
        
    
}

var targetPin, mouseX, mouseY, mousePrevX, mousePrevY;

window.addEventListener("mouseup", openPin)


function setTargetPin(e){
   targetPin=this;
    mouseX=e.clientX;
    mouseY=e.clientY;
 }

 function openPin(e){
    if(Math.abs(mouseX-e.clientX)<5&&Math.abs(mouseY-e.clientY)<5){
    panZoom.resetZoom();
    }
 }