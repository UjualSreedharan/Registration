function clearErrors(){
    errors=document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML="";
    }
}

function seterror(id,error){
    element=document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML=error;
}

function validateForm(){
var returnval=true;
clearErrors();

var ftname=document.forms['f1']["fname"].value;
if(ftname.length<5){
    seterror("ftname","*Length of first name is too short");
    returnval=false;
}
if(ftname.length==0){
    seterror("ftname","*Length of first name cannot be blank");
    returnval=false;
}
var ltname=document.forms['f1']["lname"].value;
if(ltname.length<5){
    seterror("ltname","*Length of last name is too short");
    returnval=false;
}
if(ltname.length==0){
    seterror("ltname","*Length of last name cannot be blank");
    returnval=false;
}
var email=document.forms['f1']["femail"].value;
if(email.length>30){
    seterror("email","*Email length is too long");
    returnval=false;
}
var number=document.forms['f1']["fnumber"].value;
if(number.length!=10){
    seterror("number","*Number should be of 10 digits");
    returnval=false;
}
var password=document.forms['f1']["fpassword"].value;
if(password.length>30){
    seterror("password","*Password should contain atleast character");
    returnval=false;
}
var cpassword=document.forms['f1']["fcpassword"].value;
if(cpassword!=password){
    seterror("cpassword","*Password and Confirm Password should match");
    returnval=false;
}


return returnval;
}