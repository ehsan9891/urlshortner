$(document).ready(function(){
    $('form').not(":eq(0)").hide();        
      $('h3').click(function(){
      $('form').hide(500).siblings('.error').hide();
      $(this).siblings('form').show(500);
      $(this).siblings('.error').show(500);
    });    
});
function validate(type) {
    var errors = {};
    if(type == 'squeeze'){
       var url = document.forms["squeeze"]["squeeze[url]"].value;
       var email = document.forms["squeeze"]["squeeze[email]"].value;
       var pass = document.forms["squeeze"]["squeeze[pass]"].value;
       var rpass = document.forms["squeeze"]["squeeze[rpass]"].value;
       
       if (url == null || url == ""){
           var msg = "I Need To Squeeze Somthing!!";
           showError();
       }
    } else if(type == 'edit-squeeze'){
        alert('edit');
    }
    return false;  
}

function showError(){
    
}
  