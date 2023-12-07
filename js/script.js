let form = document.querySelector('.form_group'),
    formInputs = document.querySelectorAll('.js-input'),
    inputCheckbox = document.querySelector('#js-input-checkbox');

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.onsubmit = function () {
    let emptyInputs = Array.from(formInputs).filter(input => input.value === '');

    formInputs.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('error');
            console.log('not valid')
        } else {
            input.classList.remove('error');
        }
    });

    if (emptyInputs.length !== 0) {
        console.log('Some inputs are not filled');
        event.preventDefault();
        return false;
    }

    let emailVal = form.querySelector('.js-input[type="email"]').value;

    if (!validateEmail(emailVal)) {
        console.log('email not valid');
        form.querySelector('.js-input[type="email"]').classList.add('error');
        return false;
    } else {
        form.querySelector('.js-input[type="email"]').classList.remove('error');
    }



    if (!inputCheckbox.checked) {
        console.log('checkbox not checked');
        inputCheckbox.classList.add('error');
        return false;
    } else {
        inputCheckbox.classList.remove('error');
    }
}
