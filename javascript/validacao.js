// ---------- VALIDAÇÃO EMAIL ---------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

// ---------- VALIDAÇÃO SENHA ---------- //
let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");

// ---------- VALIDAÇÃO FORM ---------- //
let form = document.getElementById("formlogin");


// Função que valida senha

function validSenha() {
    let valor = senhaInput.value;
    let valorSemEspacos = valor.trim();
    if (valor === "" || valorSemEspacos.length < 8) {
        senhaInput.classList.remove("correct");
        senhaInput.classList.add("error");
        senhaHelper.innerText = "A senha precisa ter no mínimo 8 caracteres";
        senhaHelper.classList.add("visible");
        return false; // Senha inválida
    } else {
        senhaInput.classList.remove("error");
        senhaInput.classList.add("correct");
        senhaHelper.classList.remove("visible");
        return true; // Senha válida
    }
}

// Função que valida email
function validEmail() {
    let valor = emailInput.value;
    if (valor.includes("@") && valor.includes(".com")) {
        emailInput.classList.remove("error");
        emailInput.classList.add("correct");
        emailHelper.classList.remove("visible");
        emailHelper.innerText = ""; // Limpa a mensagem de erro
        return true; // Email válido
    } else {
        emailInput.classList.remove("correct");
        emailInput.classList.add("error");
        emailHelper.innerText = "Email no formato incorreto, revise a escrita e tente novamente";
        emailHelper.classList.add("visible");
        return false; // Email inválido
    }
}

// Chamadas das funções
senhaInput.addEventListener("input", validSenha);
emailInput.addEventListener("input", validEmail);

function validateForm() {
    let isSenhaValid = validSenha();
    let isEmailValid = validEmail();
    return isSenhaValid && isEmailValid; // Retorna true se ambos os campos forem válidos
}

// Adiciona o evento de submit ao formulário
form.addEventListener('submit', function(event) {
    // Previne o envio padrão do formulário
    event.preventDefault();

    // Valida o formulário e redireciona se tudo estiver válido
    if (validateForm()) {
        window.location.href = '../perfil.html'; // Redireciona para a nova página se tudo estiver válido
    } else {
        console.log("Formulário inválido. Verifique os campos e tente novamente.");
    }
});

// Mostra e oculta popup de campo obrigatório
//mostraOcultaPopup(senhaInput, senhaLabel);
//mostraOcultaPopup(emailInput, emailLabel);
