function pinLoader(){
    fetch('../MASTERLIST.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
}