/* global $ */
$(function(){
    "use strict";
    /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        });   
    });
    
    /*==================================================================
    [ Show pass ]*/
    var showPass = 0;
    $('.btn-show-pass').on('click', function(){
        if(showPass == 0) {
            $(this).next('input').attr('type','text');
            $(this).find('i').removeClass('zmdi-eye');
            $(this).find('i').addClass('zmdi-eye-off');
            showPass = 1;
        }
        else {
            $(this).next('input').attr('type','password');
            $(this).find('i').addClass('zmdi-eye');
            $(this).find('i').removeClass('zmdi-eye-off');
            showPass = 0;
        }
        
    });
    
    $("#btn-submit").click(function(e){
        e.preventDefault();
        
        if(validForm())
        {
            //Send POST
        }
        else
        {
            //Send Error modal
            showModal("error","Error","Usuario incorrecto, favor verificar.");
        }
    })
});

function showModal(type,title,text)
{
    swal({
      type: type,
      title: title,
      text: text,
      //footer: '<a href>Why do I have this issue?</a>',
    })
}

function validForm()
{
    var user = $("#user").val();
    return /[^a-zA-Z0-9]/.test();
}