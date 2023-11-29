let form = document.querySelector('.js-form'),
    formInputs = document.querySelectorAll('.js-input'),
    inputEmail = document.querySelector('.js-input-email'),
    inputCheckbox = document.querySelector('.js-input-checkbox');


function valdateEmail(email){
    let re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLocaleLowerCase());
}

form.onsubmit = function () {
    let emailVal = inputEmail.value,
        emptyInputs = Array.from(formInputs).filter(input => input.value === '');

        
       
    formInputs.forEach (function (input) {
        if (input.value === '') {
            input.classList.add('error');
           
        } else{
            input.classList.remove('error');
        }
    });
    if (emptyInputs.length !==0){
        console.log('input not filled');
        return false;
    }

    if(!valdateEmail(emailVal)){
        console.log('email not valid');
        inputEmail.classList.add('error');
        return false;
    }else {
        inputEmail.classList.remove('error');
    }

    if(!inputCheckbox.checked){
        console.log('checkbox not checked');
        inputCheckbox.classList.add('error');
        return false;
    }else {
        inputCheckbox.classList.remove('error');
    }
 
}