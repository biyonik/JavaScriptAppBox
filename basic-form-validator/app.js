const form = document.getElementById('form');
const kullanici_adi = document.getElementById('kullanici_adi');
const eposta = document.getElementById('eposta');
const parola = document.getElementById('parola');
const parola_tekrar = document.getElementById('parola_tekrar');


const showError = (input, mesaj) => {
    const form_control = input.parentElement;
    form_control.className = 'form-control error';
    const small = form_control.querySelector('small');
    small.textContent = mesaj;
}

const showSuccess = (input) => {
    const form_control = input.parentElement;
    form_control.className = 'form-control success';
}

const isValidEmail = (input) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim()) === false) {
        showError(input, `${getFieldName(input)} alanı geçerli bir e-posta adresi değil!`)
    } else {
        showSuccess(input);
    }
}

const getFieldName = (field) => {
    return field.id.charAt(0).toUpperCase() + field.id.substring(1, field.id.length)
}

const checkLength = (input, min, max) => {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} alanı minimum ${min} karakter olmalıdır`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} alanı maksimum ${max} karakter olmalıdır`);
    } else {
        showSuccess(input);
    }
}

const checkConfirmPassword = (parola, parola_tekrar) => {
    if ((parola.value.trim() === parola_tekrar.value.trim()) && parola.value !== '' && parola_tekrar !== '') {
        showSuccess(parola);
        showSuccess(parola_tekrar);
    } else {
        showError(parola_tekrar, `${getFieldName(parola_tekrar)} alanı ${getFieldName(parola)} ile uyuşmuyor`)
    }
}

const checkRequired = (inputArr) => {
    inputArr.forEach((input) => {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} alanı boş bırakılamaz`);
        } else {
            showSuccess(input)
        }
    });
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([kullanici_adi, eposta, parola, parola_tekrar]);
    checkLength(kullanici_adi, 3, 15);
    checkLength(parola, 6, 20);
    checkLength(parola_tekrar, 6, 20);
    isValidEmail(eposta);
    checkConfirmPassword(parola, parola_tekrar);
});