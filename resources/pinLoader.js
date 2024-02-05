var pin;

function pinLoader(){
    fetch('../MASTERLIST.json')
    .then((response) => response.json())
    .then((master) =>     {


    for(var i=0; i<master.fileList.length; i++){
        fetch('../'+master.fileList[i])
    .then((response) => response.json())
    .then((pinData) => {

pin=document.createElementNS("http://www.w3.org/2000/svg","image");
pin.classList.add("pin");
if(pinData.kingdomFund=="true"){
    pin.classList.add(pinData.category+"-kf");
}
else{
    pin.classList.add(pinData.category);
}
pin.setAttribute("xpos","."+pinData.xPosition);
pin.setAttribute("ypos","."+pinData.yPosition);
pin.setAttribute("height","10%");

pin.setAttribute("href","");
pin.setAttribute("name",pinData.name);
switch(pinData.mapType){
    case "sf":
    pin.classList.add("local-pin");
    document.getElementById("local-svg").appendChild(pin);
    break;
    case "ethiopia":
        pin.classList.add("ethiopia-pin");
        document.getElementById("ethiopia-svg").appendChild(pin);
    default:
        document.getElementsByClassName("svg-pan-zoom_viewport")[0].appendChild(pin);

    break;
}


console.log(19);
console.log(pin);

    });


    }


});

}


pinLoader();