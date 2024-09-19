// ---------- VALIDAÇÃO NOME ---------- //
let nomeInput = document.getElementById("nomeCompleto");
let nomeHelper = document.getElementById("nome-helper");

// ---------- VALIDAÇÃO SENHA ---------- //
let senhaInput = document.getElementById("senha");
let senhaHelper = document.getElementById("senha-helper");

// ---------- VALIDAÇÃO EMAIL ---------- //
let emailInput = document.getElementById("emailFornecido");
let emailHelper = document.getElementById("email-helper");


// ---------- VALIDAÇÃO tel ---------- //
let telInput = document.getElementById("numeroTelefone");
let telHelper = document.getElementById("tel-helper");

// ---------- VALIDAÇÃO CPF ---------- //
let cpfInput = document.getElementById("cpfFornecido");
let cpfHelper = document.getElementById("cpf-helper");

// VALIDA DTNASCIMENTO
let dataInput = document.getElementById("dataNascimento");
let dataHelper = document.getElementById("data-helper");

// ---------- VALIDAÇÃO FORM ---------- //
 let form = document.getElementById("form-cadastro");

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






// Função que valida tel
function validTel() {
    let valorTel = telInput.value;
    let valorSemEspacos = valorTel.trim();
    
    if (valorSemEspacos === "" || valorSemEspacos.length < 11) {
        telInput.classList.remove("correct");
        telInput.classList.add("error");
        telHelper.innerText = "Um número de telefone tem no mínimo 11 caracteres, sem espaço ou caracteres especiais";
        telHelper.classList.add("visible");
        return false; // Número inválido
    } else {
        telInput.classList.remove("error");
        telInput.classList.add("correct");
        telHelper.classList.remove("visible");
        return true; // Número válido
    }
}

// Função que valida CPF
function validCpf() {
    let valorCpf = cpfInput.value;
    let valorSemEspacos = valorCpf.trim();
    
    if (valorSemEspacos === "" || valorSemEspacos.length < 11) {
        cpfInput.classList.remove("correct");
        cpfInput.classList.add("error");
        cpfHelper.innerText = "Um número de CPF tem no mínimo 11 caracteres, sem espaço ou caracteres especiais";
        cpfHelper.classList.add("visible");
        return false; // Número inválido
    } else {
        cpfInput.classList.remove("error");
        cpfInput.classList.add("correct");
        cpfHelper.classList.remove("visible");
        return true; // Número válido
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

//VALIDA NOME



function validNome() {
    let valorNome = nomeInput.value;
    
    if (valorNome.length <= 2  ) {
        nomeInput.classList.remove("correct");
        nomeInput.classList.add("error");
        nomeHelper.innerText = "Desculpe, o Nome precisa ter no minimo 3 caracteres";
        nomeHelper.classList.add("visible");
        return false; // Número inválido
    }  if (valorNome.length >= 20  ) {
        nomeInput.classList.remove("correct");
        nomeInput.classList.add("error");
        nomeHelper.innerText = "Desculpe, o Nome ultrapassou o limite de 20 caracteres";
        nomeHelper.classList.add("visible");
        return false; // Número inválido
    } else {
        nomeInput.classList.remove("error");
        nomeInput.classList.add("correct");
        nomeHelper.classList.remove("visible");
        return true; // Número válido
    }
}

//VALIDA DTNASCIMENTO
function validDataNascimento() {
    let valorData = dataInput.value;
    let dataNascimento = new Date(valorData);
    let hoje = new Date();

    // Verifica se a data está vazia
    if (!valorData) {
        dataInput.classList.remove("correct");
        dataInput.classList.add("error");
        dataHelper.innerText = "Por favor, insira uma data de nascimento.";
        dataHelper.classList.add("visible");
        return false;
    }

    // Verifica se a data de nascimento está no futuro
    if (dataNascimento > hoje) {
        dataInput.classList.remove("correct");
        dataInput.classList.add("error");
        dataHelper.innerText = "A data de nascimento não pode estar no futuro.";
        dataHelper.classList.add("visible");
        return false;
    }

    // Verifica se a pessoa tem pelo menos 18 anos
    let idadeMinima = 18;
    let dataLimite = new Date(hoje.getFullYear() - idadeMinima, hoje.getMonth(), hoje.getDate());
    
    if (dataNascimento > dataLimite) {
        dataInput.classList.remove("correct");
        dataInput.classList.add("error");
        dataHelper.innerText = "Você deve ter pelo menos 18 anos.";
        dataHelper.classList.add("visible");
        return false;
    }

    
    dataInput.classList.remove("error");
    dataInput.classList.add("correct");
    dataHelper.classList.remove("visible");
    return true;
}



// Chamadas das funções
senhaInput.addEventListener("input", validSenha);
emailInput.addEventListener("input", validEmail);
telInput.addEventListener("input",validTel);
cpfInput.addEventListener("input",validCpf);
nomeInput.addEventListener("input",validNome);
dataInput.addEventListener("input",validDataNascimento);

function validateForm() {
    let isSenhaValid = validSenha();
    let isEmailValid = validEmail();
       let isTelValid = validTel();
    let isCpfValid = validCpf();
    let isNomeValid = validNome();
    let isDataNascimentoValid = validDataNascimento();
    return isSenhaValid && isEmailValid && isTelValid && isCpfValid && isNomeValid && isDataNascimentoValid ; // Retorna true se ambos os campos forem válidos
}

//Adiciona o evento de submit ao formulário
form.addEventListener("submit", function(event) {
    // Previne o envio padrão do formulário
    event.preventDefault();
    let confirmacao = confirm("Você tem certeza que todos os dados estão corretos?");
    // Valida o formulário e redireciona se tudo estiver válido
    if (validateForm() && confirmacao) {

        alert("Cadastro Realizado com sucesso, após clicar em ok, voce sera redirecionado em 3 segundos!")
        setTimeout(() => {   
        window.location.href = 'login.html'; // Redireciona para a nova página se tudo estiver válido
        }, 3000);
        
    } else {
        console.log("Formulário inválido. Verifique os campos e tente novamente.");
    }
});






