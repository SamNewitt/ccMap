var pin,info,media;

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
media=document.createElement("div");
media.classList.add("info-media");
info=document.createElement("div")
info.setAttribute("name",pinData.name);
info.className.add("info-container");
info.appendChild(createElement("h1").innerHTML=pinData.name);
if(pinData.cornerLogo!=""){


info.appendChild(createElement("img").setAttribute("src","../images/"+pinData.cornerLogo).classList.add("info-logo"));
}
if(pinData.images.length=1){
    media.appendChild(createElement("img").setAttribute('src',"../images/"+pinData.images[0]));
    info.appendChild(media);
}
info.appendChild(createElement("p").innerHTML=pinData.description);
for(var i=0; i<pinData.links.length;i++){
info.appendChild((createElement("a").innerHTML=pinData.links[i][0]).setAttribute("target","_blank").setAttribute("href",pinData.links[i][1]).classList.add("info-link-lowercase"));

}





console.log(20);
console.log(info);

    });


    }


});

}


pinLoader();