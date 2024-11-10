/*
    Name: Mbuyelo Muremela
    Qualification: Bachelor of science, Informatics
    Email: mbuyelomuremela05@gmail.com
    Number: +27721816840
    Date Modified: 08/11/2024
*/

"use strict";

const registerForm = document.getElementById('reg-form');

const firstName = document.getElementById('firstname');
const errorFName = document.getElementById('error-fname');

const lastName = document.getElementById('lastname');
const errorLName = document.getElementById('error-lname');

const email = document.getElementById('email');
const confirmEmail = document.getElementById('confirm-email');
const errorEmail = document.getElementById('error-email');
const errorConfirmEmail = document.getElementById('error-email-mismatch');

const cellphoneNumber = document.getElementById('phonenumber');
const errorcellphoneNumber = document.getElementById('error-cellphone-number');

const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const errorPassword = document.getElementById('error-password');
const errorConfirmPassword = document.getElementById('error-password-mismatch');

const firstNamePattern = /^[a-zA-Z0-9_,]+$/;
const lastNamePattern = /^[a-zA-Z0-9_,]+$/;
const emailPattern = /^[a-zA-Z0-9_]+@[a-zA-Z0-9_.]+\.[a-zA-Z.]{3,5}$/;
const passwordPattern = /^[a-zA-Z0-9_@$]{8,20}$/;
const phonePattern = /^\d{10}$/;
       

if(registerForm.addEventListener)
    registerForm.addEventListener('submit',validateRegisterForm,false);
else if(registerForm.attachEvent)
    registerForm.attachEvent('onsubmit',validateRegisterForm);

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

function checkFirstName(){
   
    return validateFieldData(firstName,firstNamePattern,errorFName,'enter a valid name as it appears on the id!');
}

function checkLastName(){
    
    return validateFieldData(lastName,lastNamePattern,errorLName,'enter a valid surname as it appears on the id!');
}

function checkEmail(){

    return validateFieldData(email,emailPattern,errorEmail,'enter a valid email address!');
}

function confirmEmailMatches(){
    let status = false;

    if(email.value === confirmEmail.value){
        errorConfirmEmail.style.display = 'none';
        confirmEmail.style.borderBottom = "1px solid rgb(129, 235, 110)";
        status = true;
    }else{
        errorConfirmEmail.style.display = 'block';
        errorConfirmEmail.textContent = "emails doen't match"
        confirmEmail.style.borderBottom = "1px solid rgb(206, 95, 101)";
    }
        
    return status;
}

function checkPassword(){
    
    return validateFieldData(password,passwordPattern,errorPassword,'valid password must be atleast 8 characters, but not more than 20 \ncombination of upper, lower-case letters, numbers and\nspecial charcters ( @ $ or _ )');
}

function confirmPasswordMatches(){
    let status = false;

    if(password.value === confirmPassword.value){
        errorConfirmPassword.style.display = 'none';
        confirmPassword.style.borderBottom = "1px solid rgb(129, 235, 110)";
        status = true;
    }else{
        errorConfirmPassword.style.display = 'block';
        errorConfirmPassword.textContent = "passwords doen't match"
        confirmPassword.style.borderBottom = "1px solid rgb(206, 95, 101)";
    }
        
    return status;
}

function checkCellPhoneNumber(){

    return validateFieldData(cellphoneNumber,phonePattern,errorcellphoneNumber,'enter a valid cellphone number!');
}

let validationStaus = ()=>{
    
    return (checkFirstName() && checkLastName() && checkEmail() && confirmEmailMatches() &&  checkCellPhoneNumber() && checkPassword() && confirmPasswordMatches())
}


function validateRegisterForm(event){

    if(event.preventDefault)
        event.preventDefault();
    else if(event.returnValue)
        event.returnValue = false;

    if(!validationStaus())
        return;
    
    registerForm.submit();
}