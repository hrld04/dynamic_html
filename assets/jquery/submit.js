$(document).ready(function(){
  
    
    
    $(".submit").click(function(){

        //For validation
        var un = $(".first_name").val();
        var pass = $(".password").val();
        
        if(un == ""){
            $(".nameErr").html("Enter username" + " " + '<i class="bi bi-x-octagon-fill"></i>');
        } 
        else if (un.length < 6){
            $(".nameErr").html("Name must contains 6 letters" + " " + '<i class="bi bi-x-octagon-fill"></i>');
        }
        else if (un){
            $(".nameErr").html("");
        }

        if(pass == ""){
            $(".passErr").html("Enter password" + " " + '<i class="bi bi-x-octagon-fill"></i>');
        } 
        else if (pass.length < 8){
            $(".passErr").html("Password must contains 8 characters" + " " + '<i class="bi bi-x-octagon-fill"></i>');
        }
        else if (un){
            $(".passErr").html("");
        }

    })
    

    
    $('#check').click(function(){
        //$(this).is(':checked') ? $('#password').attr('type', 'text') : $('#password').attr('type', 'password');
        if ($(this).is(':checked')) {
            $('#password').attr('type', 'text')
        }
        else {
            $('#password').attr('type', 'password')
        }
    });
    
    
    
    //This is add input
    $(".add_subj").click(function(){
        $(".input-parent").append("<div id='new_row' class='parent after justify-content-center d-flex'><input id='input_text 'class='subject form-control m-1 m-input' type='text'><i class='delete bi bi-x-circle text-danger ms-2 mt-2' style='font-size: 20px'></i></div>")
    })
    
    //This is delete input ()
    $(document).on('click','.delete', function(){
        $(this).parents('.parent').remove();
    })

    //this will output the sum
    $(".sum").click(function(){
        var totalPoints = 0; 
        $(".subject").each(function(){                
            totalPoints += parseInt($(this).val()) || 0;                             
        })          
        alert("The sum is: " + totalPoints);    
    })

    
   
})