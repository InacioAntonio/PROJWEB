if (typeof Storage != "undefine") {
  var btnG = document.getElementById("btnG");
  var username = document.getElementById("Nome_User"),
    password = document.getElementById("password"),
    email = document.getElementById("Email_User"),
    cidade = document.getElementById("Cidade_User"),
    estado = document.getElementById("Estado_User"),
    clone_passoword = document.getElementById("CloneP");
  var MsgErro = document.getElementById("MsgErro");
  var MsgSucess = document.getElementById("MsgSucess");
  var labelNome,
    labelEmail,
    labelsenha,
    label_estado,
    label_cidade,
    label_repetir_senha;
  labelNome = document.getElementById("label_nome");
  labelEmail = document.getElementById("label_email");
  labelsenha = document.getElementById("label_senha");
  label_estado = document.getElementById("label_estado");
  label_cidade = document.getElementById("label_cidade");
  label_repetir_senha = document.getElementById("label_repetir_senha");
  var valid_username,
    valid_password,
    valid_email,
    valid_cidade,
    valid_estado,
    valid_cloneP;
  username.addEventListener("input", () => {
    if (username.value.length <= 2) {
      labelNome.setAttribute("style", "color: red");
      labelNome.innerHTML = "Nome *Insira no minimo 3 caracteres";
      username.setAttribute("style", "border-color: red");
      valid_username = false;
    } else {
      labelNome.setAttribute("style", "color: green");
      labelNome.innerHTML = "Nome";
      username.setAttribute("style", "border-color: green");
      valid_username = true;
    }
  });
  password.addEventListener("input", () => {
    if (password.value.length <= 4) {
      labelsenha.setAttribute("style", "color:red");
      labelsenha.innerHTML = "Senha *Insira no minimo 5 caracteres";
      password.setAttribute("style", "border-color:red");
      valid_password = false;
    } else {
      labelsenha.setAttribute("style", "color:green");
      labelsenha.innerHTML = "Senha";
      password.setAttribute("style", "border-color:green");
      valid_password = true;
    }
  });
  clone_passoword.addEventListener("input", () => {
    if (
      password.value != clone_passoword.value ||
      clone_passoword.value.length === 0
    ) {
      label_repetir_senha.setAttribute("style", "color:red");
      label_repetir_senha.innerHTML =
        "Repetir-Senha *As senhas estao divergentes";
      clone_passoword.setAttribute("style", "border-color:red");
      valid_cloneP = false;
    } else {
      label_repetir_senha.setAttribute("style", "color:green");
      label_repetir_senha.innerHTML = "Repetir-Senha";
      clone_passoword.setAttribute("style", "border-color:green");
      valid_cloneP = true;
    }
  });
  email.addEventListener("input", () => {
    if (email.value.length <= 8) {
      labelEmail.setAttribute("style", "color: red");
      labelEmail.innerHTML = "E-mail *Invalido";
      email.setAttribute("style", "border-color:red");
      valid_email = false;
    } else {
      labelEmail.setAttribute("style", "color:green");
      email.setAttribute("style", "color:green");
      labelEmail.innerHTML = "E-mail";
      valid_email = true;
    }
  });
  cidade.addEventListener("input", () => {
    if (cidade.value.length === 0) {
      label_cidade.setAttribute("style", "color:red");
      label_cidade.innerHTML = "Digite sua Cidade *Campo Invalido";
      cidade.setAttribute("style", "border-color:red");
      valid_cidade = false;
    } else {
      label_cidade.setAttribute("style", "color:green");
      label_cidade.innerHTML = "Digite sua Cidade";
      cidade.setAttribute("style", "border-color:green");
      valid_cidade = true;
    }
  });
  estado.addEventListener("input", () => {
    if (estado.value.length === 0) {
      label_estado.setAttribute("style", "color:red");
      label_estado.innerHTML = "Digite o seu Estado *Invalido";
      estado.setAttribute("style", "border-color:red");
      valid_estado = false;
    } else {
      label_estado.setAttribute("style", "color:green");
      label_estado.innerHTML = "Digite o seu Estado";
      estado.setAttribute("style", "border-color:green");
      valid_estado = true;
    }
  });
  btnG.addEventListener("click", () => {
    //document.getElementById("Cadastro").submit();
    username = document.getElementById("Nome_User").value;

    password = document.getElementById("password").value;

    email = document.getElementById("Email_User").value;

    cidade = document.getElementById("Cidade_User").value;

    estado = document.getElementById("Estado_User").value;

    clone_passoword = document.getElementById("CloneP").value;

    if (
      valid_username &&
      valid_cidade &&
      valid_cloneP &&
      valid_password &&
      valid_email
    ) {
      var users = JSON.parse(localStorage.getItem("users") || "[]");
      if (password.value === clone_passoword.value) {
        var userExists = users.some(function (user) {
          return user.Email === email;
        });
        if (userExists) {
          MsgErro.setAttribute("style", "display:block");
          MsgErro.innerHTML = "Email já está cadastrado";
          MsgSucess.setAttribute("style", "display: none");
          MsgSucess.innerHTML = "";
        } else {
          users.push({
            Email: email,
            Password: password,
            Cidade: cidade,
            Estado: estado,
            Nome: username,
          });
          //users.push(user);
          localStorage.setItem("users", JSON.stringify(users));
          MsgSucess.setAttribute("style", "display: block");
          MsgSucess.innerHTML = "Cadastro Realizado com Sucesso";
          MsgErro.setAttribute("style", "display:none");
          MsgErro.innerHTML = " ";
          window.location.href = "index.html";
        }
      } else {
        MsgErro.setAttribute("style", "display:block");
        MsgErro.innerHTML = "Senhas divergentes impossivel Realizar o Cadastro";
        MsgSucess.setAttribute("style", "display: none");
        MsgSucess.innerHTML = " ";
      }
    } else {
      MsgErro.setAttribute("style", "display:block");
      MsgErro.innerHTML = "Campos Vazios impossivel realizar o Cadastro";
      MsgSucess.setAttribute("style", "display: none");
      MsgSucess.innerHTML = " ";
    }
  });
} else {
  document.write("Sem suporte a Web Storage!");
}
