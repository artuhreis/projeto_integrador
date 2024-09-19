// ---------- VALIDAÇÃO EMAIL ---------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

document.querySelectorAll(".envia").forEach(function(button) {
    button.addEventListener("click", function(event) {
        event.preventDefault(); 

        var confirmarCompra = confirm("E-mail de recuperação enviado com sucesso!");

    });
});



// ---------- VALIDAÇÃO FORM ---------- //
let form = document.getElementById("formlogin");

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

emailInput.addEventListener("input", validEmail);

function validateForm() {

    let isEmailValid = validEmail();
    return isEmailValid; // Retorna true se ambos os campos forem válidos
}

// Adiciona o evento de submit ao formulário
form.addEventListener('submit', function(event) {
    // Previne o envio padrão do formulário
    event.preventDefault();

    // Valida o formulário e redireciona se tudo estiver válido
    if (validateForm()) {
        window.location.href = 'login.html'; // Redireciona para a nova página se tudo estiver válido
    } else {
        console.log("Formulário inválido. Verifique os campos e tente novamente.");
    }
});


