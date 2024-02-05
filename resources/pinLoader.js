var fileList,pin;

function pinLoader(){
    fetch('../MASTERLIST.json')
    .then((response) => response.json())
    .then((fileList) =>     {
        console.log(3);
        console.log(fileList);
    
    });



    for(var i=0; i<fileList.length; i++){
        fetch('../'+fileList[i])
    .then((response) => response.json())
    .then((json) => pin);


    }
}