let
    message = document.createElement('p');
    email = document.querySelector('input[name="email"]');
    validEmail = /\w+@\w+.\w+/;

    document.forms[0].onsubmit = function (e) {
        if (email.value === '' || !(validEmail.test(email.value))) {
            e.preventDefault();
            this.classList.add('error');
            if (email.value === '') {
                message.textContent = 'This field is required';
            }else{
                message.textContent = 'Please provide a valid email';
            }
            this.after(message);
        }
    }