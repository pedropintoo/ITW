var status1 = document.getElementById('Status1');
var status2 = document.getElementById('Status2');
var statusx = document.getElementById('StatusX');
var botao = document.getElementById('botao');

var apostasvalidas = 0;
var apostasmultiplas = 1;
var selected1 = 0;
var selectedx = 0;
var selected2 = 0;

function boxClicked() {
    apostasvalidas = 0;
    apostasmultiplas = 1;
    selected1 = 0;
    selectedx = 0;
    selected2 = 0;

    for (var i = 1; i <= 13; i++) {
        var x = document.getElementById('Jogo' + i + '_1').checked;
        var y = document.getElementById('Jogo' + i + '_x').checked;
        var z = document.getElementById('Jogo' + i + '_2').checked;
        var apostanalinha = 1;

        if (x || y || z) {
            apostasvalidas += 1;
        }
        if (x) {
            selected1 += 1;
        }
        if (y) {
            selectedx += 1;
        }
        if (z) {
            selected2 += 1;
        }

        if ((x && y) || (x && z) || (y && z)) {
            apostanalinha = 2;
        }

        if (x && y && z) {
            apostanalinha = 3;
        }
        apostasmultiplas *= apostanalinha
    }
    setStatus()
}

function setStatus() {
    status1.innerText = selected1;
    status2.innerText = selected2;
    statusx.innerText = selectedx;

    if (apostasvalidas == 13 && apostasmultiplas >= 1 && apostasmultiplas <= 384) {
        if (apostasmultiplas == 1) {
            disableAllMultipleBoxes();
        } else {
            var x = document.getElementById('multiplas' + apostasmultiplas)
            x.checked = true;
        }

        botao.disable = false;
    } else {
        disableAllMultipleBoxes();
        botao.disable = true;
    }
}

function disableAllMultipleBoxes() {
    var arr = document.getElementsByName('multiplas');

    for (var i = 0; i < arr.length; i++) {
        arr[i].checked = false;
    }
}