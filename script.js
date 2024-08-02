let key1=document.getElementById("key-id");
let code1=document.getElementById("code-id");

document.addEventListener('keydown',(e)=>{
    let keytext=e.key;
    console.log(e.key);
    let codetext=e.keyCode;
    var audio = new Audio("./sound.wav");
    audio.play();
    key1.innerHTML=`YOU ENTERED <SPAN>${keytext}</SPAN>`;
    code1.innerHTML=`<span>${codetext}</span>`;
    code1.style.fontSize=60+"px";
    code1.style.padding=30+"px";
  
    
})