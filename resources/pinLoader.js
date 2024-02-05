var pin,info,media,elem;

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
info.classList.add("info-container");

console.log(23);



elem=document.createElement("h1");
elem.innerHTML=pinData.name;
info.appendChild(elem);

if(pinData.cornerLogo!=""){
elem=document.createElement("img");
elem.setAttribute("src","../images/"+pinData.cornerLogo)
elem.classList.add("info-logo")
info.appendChild(elem);
}
if(pinData.images.length=1){
    elem=document.createElement("img");
    elem.setAttribute('src',"../images/"+pinData.images[0])
    media.appendChild(elem);
    info.appendChild(media);
}
elem=document.createElement("p");
elem.innerHTML=pinData.description
info.appendChild(elem);
for(var i=0; i<pinData.links.length;i++){
elem=document.createElement("a");
elem.innerHTML=pinData.links[i][0]
elem.setAttribute("target","_blank");
elem.setAttribute("href",pinData.links[i][1]);
elem.classList.add("info-link-lowercase")
info.appendChild(elem);
if(pinData.images.length>1){
    for(var i=0; i<pinData.images.length;i++)
    {
    elem=document.createElement("img");
    elem.setAttribute('src',"../images/"+pinData.images[i])
    media.appendChild(elem);
    }
    info.appendChild(media);
}
document.insertBefore(document.getElementById("info-marker"),info);
}






    });


    }


});

}


pinLoader();