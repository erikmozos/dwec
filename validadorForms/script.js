// Capture the elements from the DOM
const form = document.getElementById('form');
const userName = document.getElementById('userName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordConfirm');

// Functions

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const label = formControl.querySelector('label');
    const small = formControl.querySelector('small');
    small.innerText = label.innerText + " " + message;
}

function showCorrect(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control correct';
}


isValidEmail = (email) => {
    // javascript validacion de email regex
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.exec(String(email).toLowerCase());

    if(re.test(String(email).toLowerCase())){
        showCorrect(email);
    }else{
        showError(email,'the format is not correct');
    }
}


function isMandatory(inputArray){

    inputArray.forEach((input) => {
        if (input.value === '') {
            showError(input,'is required');
        }else{
            showCorrect(input);
        }
    });

    
}

function checkLength(input,min,max){
    if (input.value.length < min) {
        showError(input,`must be at least ${min} characters`);
    }else if(input.value.length > max){
        showError(input,`must be less than ${max} characters`);
    }else{
        showCorrect(input);
    }
}

function passwordMatch(input1,input2){
    if (input1.value !== input2.value) {
        showError(input2,'is not equal');
    }else
    {
        showCorrect(input2);
    }
}


// Events


// userName.addEventListener('blur', () => {
//     if (!(userName.value === '')) {
//         showCorrect(userName);
//     }else{
//         showError(userName,'is required');
//     }
// });

form.addEventListener('blur', (e) => {
    
    e.preventDefault();

    // isMandatory(userName);
    // // isMandatory(email);
    // if (email.value === '') {
    //     showError(email,'is required');
    // }else if(!isValidEmail(email.value)){
    //     showError(email,'the format is not correct');
    // }else{
    //     showCorrect(email);
    // }
    // isMandatory(password);
    // isMandatory(passwordConfirm);
    // isMandatory(passwordConfirm);

    // if (password.value !== passwordConfirm.value) {
    //     showError(passwordConfirm,'is not equal');
    // }else
    // {
    //     showCorrect(passwordConfirm);
    // }

    isMandatory([userName,email,password,passwordConfirm]);
    checkLength(userName,3,15);
    checkLength(password,6,25);
    checkLength(passwordConfirm,6,25);
    passwordMatch(password,passwordConfirm);

});
