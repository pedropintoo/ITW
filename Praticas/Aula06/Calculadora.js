
var operacao = "+";
function getOperacao() {
    var e = document.getElementById("operacao");
    operacao = e.options[e.selectedIndex].value;
    if (operacao == "!"){
        op2.value = "";
        op2.disabled = true;
    }
    else{
        op2.disabled = false;
    }
    
}
function fatorial(x) {
    if (x == 0) {
        return 1
    }
    else if (!(Number.isInteger(x)) || (x > 0)){
        var total = 1;
        while (x > 1) {
            total = total * x;
            x--;
        }
        return total
    }
    else
        return "Erro na operação"
}

function calcula(){
    var x = document.getElementById("op1");
    x = parseFloat(x.value);
    var y = document.getElementById("op2");
    y = parseFloat(y.value);
    if ((Number.isNaN(x)) || (Number.isNaN(y) && (operacao!="!")) ){
        operacao = "";
    }
        
    switch (operacao){
        case "+":
            res.value = x + y;
            break;
        case "-":
            res.value = x - y;
            break;
        case "*":
            res.value = x * y;
            break;
        case ":":    
        console.log(y);    
        if (y!=0){
                res.value = x / y;
            }
            else {
                res.value = "Erro na operação!";
            }
            break;
            
        case "%":
            if (y!=0){
                res.value = x % y;
            }
            else {
                res.value = "Erro na operação!";
            }
            break;
        case "!":
            res.value = fatorial(x);
            break;
        default:
            res.value = "Erro na operação!";
    }


}