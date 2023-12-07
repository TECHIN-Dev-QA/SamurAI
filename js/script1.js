
let form = document.querySelector('.form_group'),
    formInputs = document.querySelectorAll('.js-input'),
    inputEmail = document.querySelector('.js-input-email'),
    inputCheckbox = document.querySelector('.js-input-checkbox');


    function validateEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    
    // function validateCountry(country) {
    //     let re = new RegExp('.co$');
    //     return re.test(String(country).toLowerCase());
    // }
    
    // function validatePhone(phone) {
    //     let re = /^[0-9\s]*$/;
        
    // }
    
    form.onsubmit = function () {
        let emailVal = inputEmail.value,
            emptyInputs = Array.from(formInputs).filter(input => input.value === '');
    
        formInputs.forEach(function (input) {
            if (input.value === '') {
                input.classList.add('error');
    
            } else {
                input.classList.remove('error');
            }
        });
    
        if (emptyInputs.length !== 0) {
            console.log('inputs not filled');
            return false;
        }
    
        if(!validateEmail(emailVal)) {
            console.log('email not valid');
            inputEmail.classList.add('error');
            return false;
        } else {
            inputEmail.classList.remove('error');
        }
    
        if (validateCountry(emailVal)) {
            console.log('email from Columbia');
            inputEmail.classList.add('error');
            return false;
        } else {
            inputEmail.classList.remove('error');
        }
    
        if(!inputCheckbox.checked) {
            console.log('checkbox not checked');
            inputCheckbox.classList.add('error');
            return false;
        } else {
            inputCheckbox.classList.remove('error')
        }
    
    
    }

// $(document).ready(function(){
//     $('#icon').click(function(){
//       $('ul').toggleClass('show')
//     })  
//   })

// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");

// hamburger.addEventListener("click", () => {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// })

// document.querySelectorAll(".navbar-button").
//     forEach(n => n.addEventListener("click", () => {
//         hamburger.classList.remove("active");
//         navMenu.classList.remove("active");
//     }))

// document.querySelectorAll(".nav-link").
//     forEach(n => n.addEventListener("click", () => {
//         hamburger.classList.remove("active");
//         navMenu.classList.remove("active");
//     }))

