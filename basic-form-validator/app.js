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
    return re.test(String(input).toLowerCase());
}


form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (kullanici_adi.value === '') {
        showError(kullanici_adi, 'Kullanıcı adı boş bırakılamaz!');
    } else {
        showSuccess(kullanici_adi);
    }

    if (eposta.value === '') {
        showError(eposta, 'E-Posta adresi boş bırakılamaz!');
    } else if (isValidEmail(eposta.value) !== true) {
        showError(eposta, 'E-Posta adresi geçerli bir e-posta formatında değil!');
    } else {
        showSuccess(eposta)
    }

    if (parola.value === '') {
        showError(parola, 'E-Posta adresi boş bırakılamaz!');
    } else {
        showSuccess(parola);
    }

    if (parola_tekrar.value === '') {
        showError(parola_tekrar, 'E-Posta adresi boş bırakılamaz!');
    } else {
        showSuccess(parola_tekrar);
    }
});