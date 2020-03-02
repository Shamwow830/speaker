function inputValidation()
{
    var inpName = document.getElementById('input_name').value;
    var inpEmail = document.getElementById('input_email').value;
    var inpAbstract = document.getElementById('textArea').value;
    var numbers = /[0-9]/
    var validateEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    var radio1 = document.getElementById('rd1').checked;
    var radio2 = document.getElementById('rd2').checked;
    
        /*telephone: /^\d{11}$/ 
        slug: /^[a-z0-9-]+$/,
        username: /^[a-z]{5,12}$/i,
        email: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,12})$/,
        password: /^[a-z0-9_-]{8,20}$/
        password: /^[a-z0-9_-]{8,20}$/,
        email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
        */

    // if(inpName == "" || (inpEmail == "") || (inpAbstract == ""))
    // {
    //     document.getElementById('input_name').style.background = "red";
    //     document.getElementById('input_email').style.background = "red";
    //     document.getElementById('textArea').style.background = "red";
    //     alert('Please fill up the form');
    //     return false; 
    // }
    if (inpName == "" )
    {
        document.getElementById('input_name').style.background = "#E89090";
        alert('Please fill up the name.');
        return false; 
    } //kaso pag gumana to, kahit tama na siya may red pa rin if may iba pang mali
    //validation for numbers
    else if(inpName.match(numbers))
    {
        alert("Numbers are not allowed for input name");
        return false;
    }

    if (inpEmail == "" )
    {
        document.getElementById('input_email').style.background = "#E89090";
        alert('Please fill up the email.');
        return false; 
    } //kaso pag gumana to, kahit tama na siya may red pa rin if may iba pang mali
    if (inpAbstract == "" )
    {
        document.getElementById('textArea').style.background = "#E89090";
        alert('Please fill up the abstract.');
        return false; 
    } //kaso pag gumana to, kahit tama na siya may red pa rin if may iba pang mali
    //validation for radio button
    if((radio1 == "") && (radio2 == ""))
    {
        document.getElementById('radio_btn').innerHTML = "Please choose one";
        document.getElementById('radio_btn').style.visibility = "visible";
        document.getElementById('radio_btn').style.color = "#E89090";
        return false;
    }
    
    else 
    { 
        document.getElementById('radio_btn').style.visibility = "hidden"; 
    }
    
    // else if((radio1 != "") && (radio2 != ""))
    // {
    //     return true;
    // }
    // if(inpName != "" && (inpEmail != "") && (inpAbstract != ""))
    // {
    //     document.getElementById('input_name').style.background = "green";
    //     document.getElementById('input_email').style.background = "green";
    //     document.getElementById('textArea').style.background = "green";
    //     document.getElementById('welcome').innerHTML = "Welcome User";
    //     setTimeout(function() {return true}, 2000)
    // }
    //validation for email
    if(validateEmail.test(inpEmail))
    {
        document.getElementById('emailText').innerHTML = "Valid";
        document.getElementById('emailText').style.visibility = "visible";
        document.getElementById('emailText').style.color = "#B2FFA9"; 
    }
    else
    {
        document.getElementById('emailText').innerHTML = "Invalid";
        document.getElementById('emailText').style.visibility = "visible";
        document.getElementById('emailText').style.color = "#E89090";
        return false;
    }
    //kailangan din siguro available siya di ba
    var available = document.getElementById('available')
    var avaL = document.getElementById('avaL')
    if (!available.checked)
    {
        alert('You must be available to be presenting.')
        avaL.style.background = "#E89090";
        return false
    }
    // if(inpName != "" && (inpEmail != "") && (inpAbstract != ""))
    // {
        document.getElementById('input_name').style.background = "#B2FFA9";
        document.getElementById('input_email').style.background = "#B2FFA9";
        document.getElementById('textArea').style.background ="#B2FFA9";
        document.getElementById('welcome').innerHTML = "Welcome User";  
        document.getElementById('size').style.background = "#B2FFA9"
        avaL.style.background = "white"
        //document.getElementById('content').style.background = "#B2FFA9";
        //document.getElementById('header').style.background = "#B2FFA9";
        //document.getElementById('submitBtn').style.background = "#B2FFA9";
        document.body.style.background = "#B2FFA9";
        // 
    // } 
    //para magscroll papunta sa baba
    document.getElementById('link').click()
    //para di magsubmit
    return false;
    
}