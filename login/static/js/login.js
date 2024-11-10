/*
    Name: Mbuyelo Muremela
    Qualification: Bachelor of science, Informatics
    Email: mbuyelomuremela05@gmail.com
    Number: +27721816840
    Date Modified: 08/11/2024
*/

"use strict";

const loginForm = document.getElementById('login-form');

const email = document.getElementById('email');
const errorEmail = document.getElementById('error-email');

const password = document.getElementById('password');
const errorPassword = document.getElementById('error-password');


if(loginForm.addEventListener)
    loginForm.addEventListener('submit',validateLoginForm,false);
else if(loginForm.attachEvent)
    loginForm.attachEvent('onsubmit',validateLoginForm);


const emailPattern = /^[a-zA-Z0-9_]+@[a-zA-Z0-9_.]+\.[a-zA-Z.]{3,5}$/;
const passwordPattern = /^[a-zA-Z0-9_@$]{8,20}$/;


function validateFieldData(control,pattern,errorParagraph,errorMessage){

    let status = false;
    
    if(pattern.test(control.value)){
        errorParagraph.style.display = 'none';
        control.style.borderBottom = "1px solid rgb(129, 235, 110)";
        status = true;
    }else{
        errorParagraph.style.display = 'block';
        errorParagraph.textContent = errorMessage;
        control.style.borderBottom = "1px solid rgb(206, 95, 101)";
    }
        
    return status;
}

const validationStatus = ()=>{
    return (validateFieldData(email,emailPattern,errorEmail,'incorrect user name') && validateFieldData(password,passwordPattern,errorPassword,'incorrect password'));
}

function validateLoginForm(event){

    if(event.preventDefault)
        event.preventDefault();
    else if(event.returnValue)
        event.returnValue = false;

    if(!validationStatus())
        return;
    
    loginForm.submit();
    console.log(email.value);
    
}