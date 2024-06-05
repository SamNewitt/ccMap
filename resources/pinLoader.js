var pin,info,media,elem;

var descStart, descEnd, desc;

function pinLoader(){
    fetch('../_PINLIST.json')
    .then((response) => response.json())
    .then((master) =>     {


    for(var i=0; i<master.fileList.length; i++){
        fetch('../'+master.fileList[i])
    .then((response) => response.text())
    .then((pinString) => {

descStart=pinString.indexOf("description")+13;
desc=pinString.substring(descStart);
descEnd=desc.indexOf("\"");
desc=desc.substring(0,descEnd);



pinString=pinString.replace(desc, "");
console.log(pinString)

desc=desc.replace(/(?:\r\n|\r|\n)/g, '<br>')


pinData=JSON5.parse(pinString);


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




elem=document.createElement("h1");
elem.innerHTML=pinData.name;
info.appendChild(elem);
            if(!pinData.cornerLogo.includes("EXAMPLE")){
                elem=document.createElement("img");
                 elem.setAttribute('src',"../"+pinData.cornerLogo)
                 elem.classList.add("info-logo");
                 info.appendChild(elem);
            }

            if(pinData.images.length>0){
                for(var i=0; i<pinData.images.length;i++)
                {
                        if(!pinData.images[i].includes("EXAMPLE")){
                            elem=document.createElement("img");
                        elem.setAttribute('src',"../"+pinData.images[i])
                        media.appendChild(elem);
                        }
                }
                info.appendChild(media);
            }

elem=document.createElement("p");
elem.innerHTML=desc;
info.appendChild(elem);


for(var i=0; i<pinData.links.length;i++){
if(pinData.links[i][1]!=""&& !pinData.links[i][1].includes("EXAMPLE")){
elem=document.createElement("a");
elem.innerHTML=pinData.links[i][0]
elem.setAttribute("target","_blank");
if(pinData.links[i][1].includes("@")){
    elem.setAttribute("href", "mailto:"+pinData.links[i][1])
}
else{
elem.setAttribute("href",pinData.links[i][1]);
}
elem.classList.add("info-link-lowercase")
info.appendChild(elem);
}
}



document.querySelector("body").insertBefore(info,document.getElementById("info-marker"));







    }).then(() => init());


    }

})


}


pinLoader();
