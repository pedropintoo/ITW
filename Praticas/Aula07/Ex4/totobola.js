function boxClicked(thing){
    var jogos = document.querySelectorAll(".jogo");
    const jogostotal = [];
    var total = 0;
    const ArrayMult = [2,3,4,6,8,9,12,16,18,24,27,32,36,48,54,64,72,81,96,108,128,144,162,192,216,243,256,288,324,384]
    
    thing_id = thing.id.split("_")
    thing_id = [thing_id[0].split("o")[2],thing_id[1]]
    // thing_id[0] é o jogo
    // thing_id[1] é a aposta


    if (!document.getElementById("Status"+thing_id[1]).innerHTML.includes(thing_id[0])){
        console.log("Status"+thing_id[1])
        document.getElementById("Status"+thing_id[1]).innerHTML += " " + thing_id[0].bold();
    
        
    }
    else{
        
        document.getElementById("Status"+thing_id[1]).innerHTML = document.getElementById("Status"+thing_id[1]).innerHTML.split(thing_id[0])[0] + document.getElementById("Status"+thing_id[1]).innerHTML.split(thing_id[0])[1].trim()
    }
    
    for (i=0; i<jogos.length;i++) {

        if (jogos[i].checked == true) {
                total += 1;
        }

        if (((i+1)%3) == 0 ){
            jogostotal.push(total);
            total=0;
        }
    }

    var multiplas = 1;
    for(j=0; j<jogostotal.length;j++){
        
        multiplas = multiplas * jogostotal[j];
    }
    
    if(multiplas==1){
        document.getElementById("botao").disabled = false;
        ArrayMult.forEach(i => {
            document.getElementById("multiplas"+i).disabled = true; 
            document.getElementById("multiplas"+i).checked = false; 
        })
    }
    else if(ArrayMult.includes(multiplas)){
        document.getElementById("botao").disabled = false;
        document.getElementById("multiplas"+multiplas).disabled = false;
        document.getElementById("multiplas"+multiplas).checked = true;
        ArrayMult.forEach(i => {
            if (i!= multiplas){
                document.getElementById("multiplas"+i).disabled = true;
            }
        })
        

    }
    else{
        document.getElementById("botao").disabled = true;
        ArrayMult.forEach(i => {
            document.getElementById("multiplas"+i).disabled = true; 
            document.getElementById("multiplas"+i).checked = false; 
        })
    }
}