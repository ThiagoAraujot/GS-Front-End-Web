const nome = document.querySelector("#input-nome");
const email = document.querySelector("#input-email");
const botao = document.querySelector(".form-button");
const resp = document.querySelector(".resposta");
const btn_problema = document.querySelector(".problema-button");
const text = document.querySelector(".display-none");

btn_problema.addEventListener("click", function() {
    text.classList.toggle("display-none");
    text.classList.toggle("text");
});


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
    if (nome.value.length > 5) {
        return true
    }
}

function verifyEmail() {
    if (email.value.includes('@')) {
        return true
    }
}

function clearForms() {
    nome.value = ""
    email.value = ""
}

/* SCRIPT KEYFRAMES */

function aplicarAnimacaoNaSecao(secaoId, animacaoClass) {
    const secaoParaAnimar = document.getElementById(secaoId);
    if (!secaoParaAnimar) return; 

    const secaoParaAnimarPosicao = secaoParaAnimar.getBoundingClientRect();

    if (secaoParaAnimarPosicao.top < window.innerHeight && secaoParaAnimarPosicao.bottom >= 0) {
        secaoParaAnimar.classList.add(animacaoClass);
    } else {
        secaoParaAnimar.classList.remove(animacaoClass);
    }
}

window.addEventListener('scroll', function () {
    aplicarAnimacaoNaSecao('intro', 'fadeIn');
    aplicarAnimacaoNaSecao('img1', 'fadeLeft');
    aplicarAnimacaoNaSecao('cards-problema', 'fadeIn');
    aplicarAnimacaoNaSecao('img2', 'fadeLeft');
});