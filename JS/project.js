const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const btnAgendar = document.querySelector(".form-button");
const exameAgendado = document.querySelector("#exame-agendado");
const selectElement = document.querySelector("#select-exames");
const data = document.querySelector("#input-data");
const resposta = document.querySelector(".resposta")
const cpf = document.querySelector("#input-cpf");
const label_cpf = document.querySelector(".label-cpf");
const cell = document.querySelector("#input-cell");
const label_cell = document.querySelector(".label-cell");
const time = document.querySelector("#input-time");

checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        const btnId = checkbox.getAttribute('data-btn-id');
        const btn = document.querySelector(`#${btnId}`);

        btn.classList.toggle("display-none", !checkbox.checked);
        btn.classList.toggle("display-block-btn", checkbox.checked);
    });
});

cpf.addEventListener("keyup", VerificaCPF)
function VerificaCPF() {
    if (cpf.value.length != 11) {
        label_cpf.setAttribute("class", "invalido")
        label_cpf.innerHTML = "CPF Inválido"
    } else {
        label_cpf.innerHTML = "CPF Válido"
        label_cpf.setAttribute("class", "valido")
        return true
    }
}

cell.addEventListener("keyup", VerificaCell)
function VerificaCell() {
    if (cell.value.length != 11) {
        label_cell.setAttribute("class", "invalido")
        label_cell.innerHTML = "Celular Inválido"
    } else {
        label_cell.innerHTML = "Celular Válido"
        label_cell.setAttribute("class", "valido")
        return true
    }
}

btnAgendar.addEventListener("click", GerarAgendamento) 
function GerarAgendamento() {
    let selectedIndex = selectElement.selectedIndex;
    let selectedOption = selectElement.options[selectedIndex];
    let selectedText = selectedOption.text;

    if (selectElement.value == "") {
        resposta.innerHTML = `
        <p>Por favor preencha com seus dados!</p>
        `
    } else {
        resposta.innerHTML = ``
        exameAgendado.innerHTML += `
            <div class="card">
                <div class="input-container">
                    <input type="checkbox" name="sanguinio" data-btn-id="btn-agendar-1" class="input-checkbox">
                    <h2>${selectedText}</h2>
                </div>
                <div class="infos">
                    <p id="data">${data.value}</p>
                    <p id="time">${time.value}</p>
                </div>
            </div>`
    }

    
}