
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
                    showModal()
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()



function checkPlaces(){
    console.log('--- function checkPlaces()')
    var max = 0;
    var checked = $('input[name=local]:checked').length;
    //--- Se checked!=2 coloca o required=true em todos; senão, coloca o required=false em todos
    $('input[name=local]').each(function () {
        if ($(this).prop("checked") && $(this).val() * 1.0 > max) {
            max = $(this).val() * 1.0;
        }
        $(this).prop("required", checked < 2);
    });
    $("#preco").val(max);
    //--- Se checked == 2 retorna true ; senão, retorna false
    return checked >= 2;
}

function showModal(){
    $("#modaltext").html("")
    if($("#validationCustom01").val().length < 10 || $("#validationCustom01").val().length > 100){
        $("#v1").clone(true,true).attr('id','cloned_v1').appendTo("#modaltext")        
        $("#modaltext").children().attr("class","col-12 form-floating mt-3")
    }
    if($("#validationCustom02").val().length < 20 || $("#validationCustom02").val().length > 200){
        $("#v2").clone(true,true).attr('id','cloned_v2').appendTo("#modaltext")
        $("#modaltext").children().attr("class","col-12 form-floating mt-3")
    }
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-]))+$/;
    if(!regex.test($("#validationCustom03").val())){
        $("#v3").clone(true,true).attr('id','cloned_v3').appendTo("#modaltext")
        $("#modaltext").children().attr("class","col-12 form-floating mt-3")
    }
    if(!checkPlaces()){
        $("#local").clone(true,true).attr('id','cloned_v4').appendTo("#modaltext")
        $("#modaltext").children().attr("class","col-12 form-floating mt-3")
    }

    $('input').on('change', function () {
        id = this.id.toString()
        string = this.value.toString()
        $("#"+id).val(string)
    })


    $('input:checkbox').on('change', function () {
        id = this.id.toString()
        if($('#' + id).is(":checked")){
            $("#"+id).prop('checked', true);
        }
        else{
            $("#"+id).prop('checked', true);
        }
       

    })

    $('#myModal').modal('show');
    
    
}




