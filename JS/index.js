const nome = document.querySelector("#input-nome");
const email = document.querySelector("#input-email");
const botao = document.querySelector(".form-button")
const resp = document.querySelector(".resposta")

botao.addEventListener("click", registerUser)

function registerUser() {

    if (verifyName() == true && verifyEmail() == true) {
        resp.innerHTML = `<p> ${nome.value}, Agradecemos o contato! <br>
        Em breve receberá mais novidades sobre nosso projeto!</p>`
        clearForms();
    } else {
        resp.innerHTML = `<p>Por favor preencha com seus dados!</p>`
    }
}

function verifyName() {
    if (nome.value != "" && nome.value.length > 5) {
        return true
    }
}

function verifyEmail() {
    if (email.value.includes('@') && email.value != "") {
        return true
    }
}

function clearForms() {
    nome.value = ""
    email.value = ""
}