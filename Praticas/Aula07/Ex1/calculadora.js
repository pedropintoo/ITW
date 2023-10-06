
function add(thing){
    anterior = thing
    console.log(thing)
    if (document.getElementById("placar").value == "" || document.getElementById("placar").value == "Erro na operação!"){
        if (thing=="+" || thing=="-" || thing=="*" || thing=="/"){
            document.getElementById("placar").value = "0";
        }
        else {
            document.getElementById("placar").value = "";
        }
    }
    
    document.getElementById("placar").value += thing;
}

function limpar(){
    document.getElementById("placar").value = "";
}

function calcula(){
    console.log('Anterior', anterior)
    if (anterior == '*' || anterior == '/'){
        document.getElementById("placar").value += '1';
    }
    else if(anterior == '-' || anterior == '+'){
        document.getElementById("placar").value += '0';
    }
    resultado = eval(document.getElementById("placar").value);
    console.log("Resultado = ",resultado)
    if (isNaN(resultado) || resultado == "Infinity"){
        resultado = "Erro na operação!";
    }
    document.getElementById("placar").value = resultado
}