$(document).ready(function(){
    $('form').not(":eq(0)").hide();        
      $('h3').click(function(){
      $('form').hide(500).siblings('.error').hide();
      $(this).siblings('form').show(500);
      $(this).siblings('.error').show(500);
    });
    
    $('form[name="squeeze"] input').focusout(function(){
        validate('squeeze');
    });
    
    $('form[name="edit-squeeze"] input').focusout(function(){
        validate('edit-squeeze');
    });
});
function validate(type) {
    if(type === 'squeeze'){
       $('.error').html('');
       $('.error-frame').removeClass('error-frame');       
       var url = document.forms["squeeze"]["squeeze[url]"];
       var email = document.forms["squeeze"]["squeeze[email]"];
       var pass = document.forms["squeeze"]["squeeze[pass]"];
       var rpass = document.forms["squeeze"]["squeeze[rpass]"];
       
       if (url.value === null || url.value === ""){
           var msg = "I Need To Squeeze Somthing!!";
           showError(msg,url,type);
           return false;
       } else {
           var pattern = /^((https?|ftp?):\/\/)?([w|W]{3}\.)+[a-zA-Z0-9\-\.]{3,}\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?(\/|\?|$).*/;
           if (!pattern.test(url.value)){
               var msg = "Enter A Correct URL!!";
               showError(msg,url,type);
               return false;
            }
       }
       
       if (email.value.length > 0 ){
           var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
           if (!pattern.test(email.value)){
               var msg = "Enter A Correct Email!!";
               showError(msg,email,type);
               return false;
            }
            
            if ( pass.value ===null || pass.value === "" || rpass.value !== pass.value ){
               var msg = "Passwords Don't Match!!";
               showError(msg,pass,type);
               showError(null,rpass,type);
               return false;
            }
       }      
    } else if(type === 'edit-squeeze'){
       $('.error').html('');
       $('.error-frame').removeClass('error-frame');       
       var url = document.forms["edit-squeeze"]["edit-squeeze[url]"];
       var squeezedUrl = document.forms["edit-squeeze"]["edit-squeeze[squeeezeurl]"];
       var email = document.forms["edit-squeeze"]["edit-squeeze[email]"];
       var pass = document.forms["edit-squeeze"]["edit-squeeze[pass]"];
       
       if (url.value === null || url.value === ""){
           var msg = "I Need To Squeeze Somthing!!";
           showError(msg,url,type);
           return false;
        } else {
           var pattern = /^((https?|ftp?):\/\/)?([w|W]{3}\.)+[a-zA-Z0-9\-\.]{3,}\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?(\/|\?|$).*/;
           if (!pattern.test(url.value)){
               var msg = "Enter A Correct URL!!";
               showError(msg,url,type);
               return false;
            }
            
            if(squeezedUrl.value === null || squeezedUrl.value === ""){
               var msg = "Enter Your Squeezed URL!!!";
               showError(msg,squeezedUrl,type);
               return false;
            } else {
                var pattern = /^(www.razmkhah.ir\/urlshortner\/)[a-zA-Z0-9]+/;
                if(!pattern.test(squeezedUrl.value)){
                    var msg = "Enter A Correct Squeezed URL!!!";
                    showError(msg,squeezedUrl,type);
                    return false;
                }
            }
            
            if (email.value.length > 0 ){
                var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
                if (!pattern.test(email.value)){
                    var msg = "Enter A Correct Email!!";
                    showError(msg,email,type);
                    return false;
                } else {
                    if(pass.value.length <= 0){
                        var msg = "Enter Your Password!!";
                        showError(msg,pass,type);
                        return false;
                    }
                }
            } else {
                var msg = "Enter The Email!!";
                showError(msg,email,type);
                return false;
            }
            
            
       }
       
    }
    return true;  
}

function showError(msg,input,type){
    var form = $('form[name="'+type+'"]');
    if( msg !== null ){
        var MSG = '<li>' + msg + '</li>';
        form.siblings('.error').append(MSG);
    }
    input.className = 'error-frame';
}
