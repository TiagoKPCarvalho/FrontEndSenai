function login(){

    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if ((email.length < 5) || (senha.length < 8)){
        window.alert("E-mail ou senha incorretos.")
    } else (window.alert("Bem vindo!"))
}

function senhar(){

    var email = document.getElementById("email").value;

    if (email.length < 5){
        window.alert("Preencha seu e-mail corretamente.")
    } else (window.alert("Nova senha enviada para o e-mail indicado."))
}

function cadastrar(){

    var nomecad = document.getElementById("nomecad").value;
    var emailcad = document.getElementById("emailcad").value;

    if ((nomecad.length < 4) || (emailcad.length < 8) || (grecaptcha.getResponse().length === 0)){
        window.alert("Preencha seu nome e e-mail corretamente e clique em *Não sou um robô*.")
    } else (window.alert("E-mail de verificação enviado."))
}