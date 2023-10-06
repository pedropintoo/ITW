function random(){
    height = window.innerHeight;
    width = window.innerWidth;
        


    
    xPosition = Math.floor(Math.random() * (width-150));
    document.getElementById("c1").style.left = xPosition + "px";
    xPosition = Math.floor(Math.random() * (width-150));
    document.getElementById("c2").style.left = xPosition + "px";
    xPosition = Math.floor(Math.random() * (width-150));
    document.getElementById("c3").style.left = xPosition + "px";
    xPosition = Math.floor(Math.random() * (width-150));
    document.getElementById("c4").style.left = xPosition + "px";


    yPosition = Math.floor(Math.random() * (height-550));
    document.getElementById("c1").style.top = yPosition + "px";
    yPosition = Math.floor(Math.random() * (height-550));
    document.getElementById("c2").style.top = yPosition + "px";
    yPosition = Math.floor(Math.random() * (height-550));
    document.getElementById("c3").style.top = yPosition + "px";
    yPosition = Math.floor(Math.random() * (height-550));
    document.getElementById("c4").style.top = yPosition + "px";

    document.getElementById("c1").hidden = false;
    document.getElementById("c2").hidden = false;
    document.getElementById("c3").hidden = false;
    document.getElementById("c4").hidden = false;

}

function displayPostion(circle){
    px = document.getElementById(String(circle)).style.left;
    py = document.getElementById(String(circle)).style.top;
    document.getElementById("2p").textContent = "top: " + String(py);
    document.getElementById("3p").textContent = "left: " + String(px);
    if (circle == "c1"){
        document.getElementById("1p").textContent = "Olá! Eu sou o vermelho!";
    }
    else if(circle == "c2"){
        document.getElementById("1p").textContent = "Olá! Eu sou o verde!";
    }
    else if (circle == "c3"){
        document.getElementById("1p").textContent = "Olá! Eu sou o azul!";
    }
    else if (circle == "c4"){
        document.getElementById("1p").textContent = "Olá! Eu sou o amarelo!";
    }
}