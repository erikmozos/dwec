// Capture the elements from the DOM
const form = document.getElementById('form');
const userName = document.getElementById('userName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordConfirm');
const age = document.getElementById('age');
const englishLevel = document.getElementById('english-level');
const terms = document.getElementById('terms');

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
    const small = formControl.querySelector('small');
    small.innerText = ''; // Eliminar el mensaje de error
}

isValidEmail = (email) => {
    // javascript validacion de email regex
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.exec(String(email).toLowerCase());
}

function isMandatory(inputArray) {
    inputArray.forEach((input) => {
        if (input.value === '') {
            showError(input, 'is required');
        } else {
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

// form.addEventListener("blur", (e) => {
    
//     e.preventDefault();

//     const fields = [userName, email, password, passwordConfirm];

//     isMandatory(fields);
//     checkLength(userName, 3, 15);
//     checkLength(password, 6, 25);
//     checkLength(passwordConfirm, 6, 25);

//     if (e.target === email) {
//         if (!isValidEmail(email.value)) {
//             showError(email, 'the format is not correct');
//         } else {
//             showCorrect(email);
//         }
//     }

//     if (e.target === passwordConfirm) {
//         passwordMatch(password, passwordConfirm);
//     }

// }, true);


userName.addEventListener('input', () => {
    checkLength(userName, 3, 15);   
});

email.addEventListener('input', () => {
   const isValid = isValidEmail(email.value);
   if(isValid){
       showCorrect(email);
   }else{
         showError(email,'the format is not correct');
    }

});

password.addEventListener('input', () => {
    checkLength(password, 6, 25);
});

passwordConfirm.addEventListener('input', () => {
    checkLength(passwordConfirm, 6, 25);
    passwordMatch(password, passwordConfirm);
});

age.addEventListener('input', () => {
    const ageValue = age.value; 
    if (!isNaN(ageValue) && ageValue !== '') {
        if(ageValue < 110 && ageValue > 0){
            showCorrect(age);
        }else{
            showError(age, 'is not a valid');
        }
    } else {
        showError(age, 'is not a number');
    }
});

englishLevel.addEventListener('change', () => {
    if (englishLevel.value === '') {
        showError(englishLevel, 'is required');
    } else {
        showCorrect(englishLevel);
    }
});

terms.addEventListener('change', () => {
    if (!terms.checked) {
        showError(terms, 'must be accepted');
    } else {
        showCorrect(terms);
    }
});