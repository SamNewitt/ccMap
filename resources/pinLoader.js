var pin;

function pinLoader(){
    fetch('../MASTERLIST.json')
    .then((response) => response.json())
    .then((master) =>     {


    for(var i=0; i<master.fileList.length; i++){
        fetch('../'+master.fileList[i])
    .then((response) => response.json())
    .then((pinData) => {

pin=document.createElement("image");
pin.classList.add("pin");
if(pinData.kingdomFund=="true"){
    pin.classList.add(pinData.category+"-kf");
}
else{
    pin.classList.add(pinData.category);
}
pin.setAttribute("height","10%");
pin.setAttribute("xpos","."+pinData.xPosition);
pin.setAttribute("ypos","."+pinData.yPosition);
pin.setAttribute("href","");
pin.setAttribute("name",pinData.name);
document.getElementsByClassName("svg-pan-zoom_viewport")[0].appendChild(pin);
console.log(7);
console.log(pin);

    });


    }


});
}