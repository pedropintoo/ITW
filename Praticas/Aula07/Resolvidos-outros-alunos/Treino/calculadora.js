var operacao = '';
var op1 = '';
var op2 = '';
controlo = 1;
var start = true;
var res = document.getElementById('res');


function addNumber() {
    var x = event.target.value

    if (controlo == 1) {
        op1 += x
    } else {
        op2 += x
    }

    if (start == true) {
        res.innerHTML = ''
        start = false
    }
    res.innerHTML += x
}

function addOperation() {
    var x = event.target.value

    if (operacao == '' && op1 != '') {
        operacao = x
        res.innerText += x
        controlo = 2
    } else {
        erro()
    }
}

function clearResult() {
    op1 = '';
    op2 = '';
    operacao = '';
    controlo = 1;
    start = true;
    res.innerText = '0';
}

function erro() {
    start = true;
    controlo = 1;
    operacao = '';
    op1 = '';
    op2 = '';
    res.innerText = 'Error';
}

function calculate() {
    var num1 = parseInt(op1);
    var num2 = parseInt(op2);

    if (controlo == 2 && op2 != '') {
        switch (operacao) {
            case '+':
                op1 = num1 + num2;
                op2 = '';
                controlo = 1;
                operacao = '';
                res.innerText = op1;
                break;
            case '-':
                op1 = num1 - num2;
                op2 = '';
                controlo = 1;
                operacao = '';
                res.innerText = op1;
                break;
            case '*':
                op1 = num1 * num2;
                op2 = '';
                controlo = 1;
                operacao = '';
                res.innerText = op1;
                break;
            case '/':
                if (num2 == 0) {
                    erro();
                } else {
                    op1 = num1 + num2;
                    op2 = '';
                    controlo = 1;
                    operacao = '';
                    res.innerText = op1;
                }
                break;
            default:
                erro();
                break;
        }

    } else {
        erro();
    }
}