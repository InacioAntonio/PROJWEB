const formSenha = document.getElementById("Recuperar");
var labelEmail = document.getElementById("label_E-mail");
var labelCidade = document.getElementById("label_Cidade");
var labelSenha = document.getElementById("label_Senha");
var labelCloneS = document.getElementById("label_SenhaNova2");
var Email = document.getElementById("Email");
var Cidade = document.getElementById("Cidade");
var SenhaNova = document.getElementById("Senha_Nova");
var CloneSenha = document.getElementById("Senha_Nova2");
var BtnE = document.getElementById("btnE");
var valid_cidade = false;
var valid_email = false;
var valid_password = false;
var valid_cloneP = false;
formSenha.addEventListener("submit", (event) => {
  event.preventDefault();
});

Email.addEventListener("input", () => {
  if (Email.value.length <= 2) {
    labelEmail.setAttribute("style", "color: red");
    labelEmail.innerHTML = "E-mail *Insira no minimo 3 caracteres";
    Email.setAttribute("style", "border-color: red");
    valid_email = false;
  } else {
    labelEmail.setAttribute("style", "color: green");
    labelEmail.innerHTML = "E-mail";
    Email.setAttribute("style", "border-color: green");
    valid_email = true;
  }
});

Cidade.addEventListener("input", () => {
  if (Cidade.value.length <= 2) {
    labelCidade.setAttribute("style", "color: red");
    labelCidade.innerHTML = "Cidade *Insira no minimo 3 caracteres";
    Cidade.setAttribute("style", "border-color: red");
    valid_cidade = false;
  } else {
    labelCidade.setAttribute("style", "color: green");
    labelCidade.innerHTML = "Cidade";
    Cidade.setAttribute("style", "border-color: green");
    valid_cidade = true;
  }
});

SenhaNova.addEventListener("input", () => {
  if (SenhaNova.value.length <= 4) {
    labelSenha.setAttribute("style", "color:red");
    labelSenha.innerHTML = "Senha Nova *Insira no minimo 5 caracteres";
    SenhaNova.setAttribute("style", "border-color:red");
    valid_password = false;
  } else {
    labelSenha.setAttribute("style", "color:green");
    labelSenha.innerHTML = "Senha Nova";
    SenhaNova.setAttribute("style", "border-color:green");
    valid_password = true;
  }
});

CloneSenha.addEventListener("input", () => {
  if (SenhaNova.value != CloneSenha.value || CloneSenha.value.length === 0) {
    labelCloneS.setAttribute("style", "color:red");
    labelCloneS.innerHTML = "Repetir-Senha Nova *As senhas estao divergentes";
    CloneSenha.setAttribute("style", "border-color:red");
    valid_cloneP = false;
  } else {
    labelCloneS.setAttribute("style", "color:green");
    labelCloneS.innerHTML = "Repetir-Senha Nova";
    CloneSenha.setAttribute("style", "border-color:green");
    valid_cloneP = true;
  }
});

BtnE.addEventListener("click", () => {
  if (valid_password && valid_cidade && valid_cloneP && valid_email) {
    //console.log(Cidade);
    //console.log(Email);
    SenhaNova = SenhaNova.value;
    Email = Email.value;
    var users1 = JSON.parse(localStorage.getItem("users") || "[]");
    var UserExist = users1.some(function (user) {
      return user.Email === Email;
    });
    if (UserExist) {
      var NovosDados = {
        Password: SenhaNova,
      };
      var indiceParaEditar = -1;
      for (var i = 0; i < users1.length; i++) {
        if (users1[i].Email === Email) {
          indiceParaEditar = i;
          break;
        }
      }
      if (indiceParaEditar !== -1) {
        if (users1[indiceParaEditar].Cidade === Cidade.value) {
          Object.assign(users1[indiceParaEditar], NovosDados);
          localStorage.setItem("users", JSON.stringify(users1));
          alert("Senha Alterada com sucesso");
          window.location.href = "index.html";
        } else {
          alert("Cidade Está Incorreta");
        }
      } else {
        //console.log(SenhaNova.value);
        //console.log(Email);
        alert("Usuario não Encontrado");
      }
    } else {
      alert("Usuario não Encontrado !!!! ");
    }
  } else {
    alert("Campos estão errados");
  }
});
