const colors=[1,2,3,4,5,6,7,8,9,"A",
"B","C","D","E","F"];

const btn=document.getElementById("btn");
const color=document.querySelector(".color")

btn.addEventListener("click",function(){
    let hex="#";
    for(let i=0;i<6;i++){
        hex += colors[randamnumber()];
    }
    color.textContent=hex;
    document.body.style.backgroundColor=hex;
})

function randamnumber(){
    return Math.floor(Math.random()*colors.length);
}