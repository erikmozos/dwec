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
    return re.exec(String(email).toLowerCase());
}


function isMandatory(input){
    if (input.value === '') {
        showError(input,'is required');
    }else{
        showCorrect(input);
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

form.addEventListener('submit', (e) => {
    
    e.preventDefault();

    isMandatory(userName);
    // isMandatory(email);
    if (email.value === '') {
        showError(email,'is required');
    }else if(!isValidEmail(email.value)){
        showError(email,'the format is not correct');
    }else{
        showCorrect(email);
    }
    isMandatory(password);
    isMandatory(passwordConfirm);
    isMandatory(passwordConfirm);

    if (password.value !== passwordConfirm.value) {
        showError(passwordConfirm,'is not equal');
    }else
    {
        showCorrect(passwordConfirm);
    }


});