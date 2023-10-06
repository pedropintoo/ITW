// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                var twoPlaces = checkPlaces();
                console.log('--- formValidation');
                if (!form.checkValidity() || !twoPlaces) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

function checkPlaces() {
    console.log('--- function checkPlaces()');
    ////--- versão javascript
    //var checked = 0;
    //var max = 0;
    ////--- Se não houver nenhum local selecionado, failed = true (falhou!)
    //var checkboxes = document.getElementsByName("local");
    ////--- Conta os selecionados
    //for (var i = 0, n = checkboxes.length; i < n; i++) {
    //    if (checkboxes[i].checked) checked++;
    //}
    //if (checked != 2) {
    ////--- Conta coloca o required de todos a true
    //    for (var i = 0; i < checkboxes.length; i++) {
    //        checkboxes[i].required = true;
    //    }
    //}
    //else {
    //--- Conta coloca o required de todos a false
    //for (var i = 0; i < checkboxes.length; i++) {
    //    if (checkboxes[i].checked && checkboxes[i].value * 1.0 > max) {
    //        max = checkboxes[i].value * 1.0 > max
    //    }
    //    checkboxes[i].required = false;
    //}
    //}
    //document.getElementById("preco").value = max;
    //--- versão jQuery 
    var max = 0;
    var checked = $('input[name=local]:checked').length;
    //--- Se checked!=2 coloca o required=true em todos; senão, coloca o required=false em todos
    $('input[name=local]').each(function () {
        if ($(this).prop("checked") && $(this).val() * 1.0 > max) {
            max = $(this).val() * 1.0;
        }
        $(this).prop("required", checked != 2);
    });
    $("#preco").val(max);
    //--- Se checked == 2 retorna true ; senão, retorna false
    return checked == 2;
}
