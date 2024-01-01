const dogImageDiv = document.getElementById("dogImage");
const dogButtion = document.getElementById("dogButton");

function getNewDog(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(Response => Response.json())
    .then(json =>{
        dogImageDiv.innerHTML=`<img src='${json.message}'/>`;
    })
}

dogButtion.onclick =()=>getNewDog();
