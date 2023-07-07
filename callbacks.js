



var zoomCheckReqired=true;

function checkBorder(){
  if(zoomCheckReqired){
    if(panZoom.getPan().x>0){
    zoomCheckReqired=false;
    panZoom.pan({x:0, y: panZoom.getPan().y});
   }
if(panZoom.getPan().x-panZoom.getSizes().width<panZoom.getSizes().width*panZoom.getZoom()*-1){
    zoomCheckReqired=false;
    panZoom.pan({x: panZoom.getSizes().width*panZoom.getZoom()*-1+panZoom.getSizes().width, y: panZoom.getPan().y});
}

if(panZoom.getPan().y>0){
    zoomCheckReqired=false;
    panZoom.pan({x:panZoom.getPan().x, y: 0});
   }

   if(panZoom.getPan().y-panZoom.getSizes().height<panZoom.getSizes().height*panZoom.getZoom()*-1){
    zoomCheckReqired=false;
    panZoom.pan({x: panZoom.getPan().x, y: panZoom.getSizes().height*panZoom.getZoom()*-1+panZoom.getSizes().height});
}
}
else{
    zoomCheckReqired=true;
}
}

var height, width;
//Have to set timeout so the image has time to load
setTimeout(function(){
 height=document.getElementById("map").getBoundingClientRect().height;
 width=document.getElementById("map").getBoundingClientRect().width;
},10);

function zoomCallback(){
    checkBorder();

var pins = document.getElementsByClassName("pin");

pinSize=panZoom.getSizes().height/10;

    for(var i=0; i<pins.length; i++){
        pins[i].setAttribute("height",pinSize/panZoom.getZoom());
        pins[i].setAttribute("width",pinSize/panZoom.getZoom()*0.58);
        pins[i].setAttribute("y",pins[i].getAttribute("ypos")*height+(panZoom.getSizes().height-height)/2-pins[i].getBBox().height);
         pins[i].setAttribute("x",pins[i].getAttribute("xpos")*width+(panZoom.getSizes().width-width)/2-pins[i].getBBox().width/2);
        console.log(pinSize/panZoom.getZoom());
        
        }

    
}