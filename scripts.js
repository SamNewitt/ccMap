


function checkBorder(){
   if(panZoom.getPan().x>0){
    panZoom.pan({x:0, y: panZoom.getPan().y});
   }
if(panZoom.getPan().x-panZoom.getSizes().width<panZoom.getSizes().width*panZoom.getZoom()*-1){
    panZoom.pan({x: panZoom.getSizes().width*panZoom.getZoom()*-1+panZoom.getSizes().width, y: panZoom.getPan().y});
}

if(panZoom.getPan().y>0){
    panZoom.pan({x:panZoom.getPan().x, y: 0});
   }

   if(panZoom.getPan().y-panZoom.getSizes().height<panZoom.getSizes().height*panZoom.getZoom()*-1){
    panZoom.pan({x: panZoom.getPan().x, y: panZoom.getSizes().height*panZoom.getZoom()*-1+panZoom.getSizes().height});
}
   
}