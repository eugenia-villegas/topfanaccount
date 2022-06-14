let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');

function validateName(){
    let name = document.getElementById('contact-name').value;
    /*Validation for when its empty*/
    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    };
    /*Validation whe the format isnt the correct one*/
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    /*Validation when its ok*/
    nameError.innerHTML = '<i class=\"fa-solid fa-circle-check\"></i>';
    return true;
}

function validatePhone(){
    let phone = document.getElementById('contact-phone').value;
    /*Validation for when its empty*/
    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone is required';
        return false;
    };
    if (phone.length !== 11) {
        phoneError.innerHTML = 'Phone should be 11 digits';
        return false;
    };
    /*Validation whe the format isnt the correct one*/
    if (!phone.match(/^[0-9]{11}$/)) {
        phoneError.innerHTML = 'Enter a valid phone';
        return false;
    }
    /*Validation when its ok*/
    phoneError.innerHTML = '<i class=\"fa-solid fa-circle-check\"></i>';
    return true;
}

function validateEmail(){
    let email = document.getElementById('contact-email').value;
    /*Validation for when its empty*/
    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    };
    /*Validation whe the format isnt the correct one*/
    if (!email.match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        emailError.innerHTML = 'Enter a valid email';
        return false;
    }
    /*Validation when its ok*/
    emailError.innerHTML = '<i class=\"fa-solid fa-circle-check\"></i>';
    return true;
}

function validateMessage(){
    let message = document.getElementById('contact-message').value;
    let required = 30;
    let left = required - message.length;
    /*Validation for when its empty*/
    if (left > 0) {
        messageError.innerHTML = left + ' more characters required';
        return false;
    };
    
    /*Validation when its ok*/
    messageError.innerHTML = '<i class=\"fa-solid fa-circle-check\"></i>';
    return true;
}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit.';
        setTimeout(function(){submitError.style.display = 'none';}, 3000)
        return false;
    }
    return true;
}