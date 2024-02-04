



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

// var height, width;
//Have to set timeout so the image has time to load
// setTimeout(function(){
//  height=document.getElementById("map").getBoundingClientRect().height;
//  width=document.getElementById("map").getBoundingClientRect().width;
// },10);

function zoomCallback(){
    checkBorder();
setTimeout(resize,100);

    
}