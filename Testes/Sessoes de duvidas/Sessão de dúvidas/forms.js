/* Função de validação  */
function validate() {
    var retVal = true; /* Vamos partir do princípio de que o formulário está válido ... */
    retVal1 = validateNome()
    retVal2 = validateMorada()
    retVal3 = validateCurso();
    retVal4 = validateVeiculos();
    retVal5 = validateCor();

    return retVal1 && retVal2 && retVal3 && retVal4 && retVal5;
}

function validateNome() {
    nome = document.getElementById("Nome").value;
    if (nome.length < 3) {
        document.getElementById("NomeError").classList.remove("d-none");
        return false;
    } else {
        if (!document.getElementById("NomeError").classList.contains("d-none")) {
            document.getElementById("NomeError").classList.add("d-none");
        }
        return true
    }
}

function validateMorada() {
    morada = document.getElementById("Morada").value.trim().split(" ");
    if (morada.length < 3) {
        document.getElementById("MoradaError").classList.remove("d-none");
        return false;
    } else {
        if (!document.getElementById("MoradaError").classList.contains("d-none")) {
            document.getElementById("MoradaError").classList.add("d-none");
        }
        return true
    }
}

function validateCurso() {
    curso = document.getElementById("Curso").value;
    if (curso === "") {
        document.getElementById("CursoError").classList.remove("d-none");
        return false;
    } else {
        if (!document.getElementById("CursoError").classList.contains("d-none")) {
            document.getElementById("CursoError").classList.add("d-none");
        }
        return true
    }
}

function validateVeiculos() {
    veiculos = document.getElementsByName("vehicle");
    count = 0;
    veiculos.forEach(element => {
        if (element.type == "checkbox" && element.checked) {
            count++;
        }
    });

    if (count < 2) {
        document.getElementById("VehicleError").classList.remove("d-none");
        return false;
    } else {
        if (!document.getElementById("VehicleError").classList.contains("d-none")) {
            document.getElementById("VehicleError").classList.add("d-none");
        }
        return true
    }
}

function validateCor() {
    cores = document.querySelectorAll('input[name="cor"]:checked').length;
    if (cores == 0) {
        document.getElementById("CorError").classList.remove("d-none");
        return false;
    } else {
        if (!document.getElementById("CorError").classList.contains("d-none")) {
            document.getElementById("CorError").classList.add("d-none");
        }
        return true
    }
}
