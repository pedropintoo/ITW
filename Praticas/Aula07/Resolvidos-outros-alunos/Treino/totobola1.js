var _Status1 = document.getElementById('Status1');
var _StatusX = document.getElementById('StatusX');
var _Status2 = document.getElementById('Status2');
var botao = document.getElementById('botao');

var apostasvalidas = 0;
var multiplas = 1;
var selected1 = 0;
var selected2 = 0;
var selectedx = 0;

function boxClicked() {
    apostasvalidas = 0;
    multiplas = 1;
    selected1 = 0;
    selected2 = 0;
    selectedx = 0;

    for (var i = 1; i <= 13; i++) {
        var x = document.getElementById('Jogo' + i + '_1').checked;
        var y = document.getElementById('Jogo' + i + '_x').checked;
        var z = document.getElementById('Jogo' + i + '_2').checked;
        apostas_linha = 1;

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
            apostas_linha = 2;
        }

        if ((x && y && z)) {
            apostas_linha = 3;
        }

        multiplas *= apostas_linha
    }
    Status()
}

function Status() {
    _Status1.innerText = selected1;
    _Status2.innerText = selected2;
    _StatusX.innerText = selectedx;

    if (apostasvalidas == 13 && multiplas >= 1 && multiplas <= 384) {
        botao.disabled = false;
        if (multiplas == 1) {
            disableAllMultipleBoxes();
        } else {
            var _multiplas = document.getElementById('multiplas' + multiplas);
            _multiplas.checked = true;
        }

    } else {
        disableAllMultipleBoxes();
        botao.disabled = true;
    }
}

function disableAllMultipleBoxes() {
    var multiplas_arr = document.getElementsByName('multiplas');

    for (var i = 0; i <= multiplas_arr.length; i++) {
        multiplas_arr[i].checked = false;
    }
}