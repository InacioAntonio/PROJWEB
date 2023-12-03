const btnEditar = document.getElementById("BtnE");
const btnApagar = document.getElementById("BtnD");
const formApagarEditar = document.getElementById("Edicao");
let email = document.getElementById("Email");
let Nome = document.getElementById("Nome");
let cidade = document.getElementById("Cidade");
let estado = document.getElementById("Estado");
let senha = document.getElementById("Senha");
let CloneS = document.getElementById("Repetir-Senha");
let senhaNova = document.getElementById("SenhaNova");
let emailNovo = document.getElementById("Email_Novo");
let labelNome = document.getElementById("Label_nome");
let labelEmail = document.getElementById("label_email");
let labelsenha = document.getElementById("label_senha");
let label_estado = document.getElementById("Label_estado");
let label_cidade = document.getElementById("label_cidade");
let label_repetir_senha = document.getElementById("label_repetir_senha");
let labelSenhaNova = document.getElementById("label_senhaNova");
let labelEmailNovo = document.getElementById("label_email_novo");
var valid_email = false;
var valid_password = false;
var valid_username = false;
var valid_cidade = false;
var valid_cloneP = false;
var valid_estado = false;
var valid_senhaNova = true;
var valid_emailNovo = true;
Nome.addEventListener("input", () => {
  if (Nome.value.length <= 2) {
    labelNome.setAttribute("style", "color: red");
    labelNome.innerHTML = "Nome *Insira no minimo 3 caracteres";
    Nome.setAttribute("style", "border-color: red");
    valid_username = false;
  } else {
    labelNome.setAttribute("style", "color: green");
    labelNome.innerHTML = "Nome";
    Nome.setAttribute("style", "border-color: green");
    valid_username = true;
  }
});

senha.addEventListener("input", () => {
  if (senha.value.length <= 4) {
    labelsenha.setAttribute("style", "color:red");
    labelsenha.innerHTML = "Senha *Insira no minimo 5 caracteres";
    senha.setAttribute("style", "border-color:red");
    valid_password = false;
  } else {
    labelsenha.setAttribute("style", "color:green");
    labelsenha.innerHTML = "Senha";
    senha.setAttribute("style", "border-color:green");
    valid_password = true;
  }
});

CloneS.addEventListener("input", () => {
  if (senha.value != CloneS.value || CloneS.value.length === 0) {
    label_repetir_senha.setAttribute("style", "color:red");
    label_repetir_senha.innerHTML =
      "Repetir-Senha *As senhas estao divergentes";
    CloneS.setAttribute("style", "border-color:red");
    valid_cloneP = false;
  } else {
    label_repetir_senha.setAttribute("style", "color:green");
    label_repetir_senha.innerHTML = "Repetir-Senha";
    CloneS.setAttribute("style", "border-color:green");
    valid_cloneP = true;
  }
});

senhaNova.addEventListener("input", () => {
  if (senha.value.length <= 4) {
    labelSenhaNova.setAttribute("style", "color:red");
    labelSenhaNova.innerHTML = "Senha *Insira no minimo 5 caracteres";
    senhaNova.setAttribute("style", "border-color:red");
    valid_senhaNova = false;
  } else {
    labelSenhaNova.setAttribute("style", "color:green");
    labelSenhaNova.innerHTML = "Senha";
    senhaNova.setAttribute("style", "border-color:green");
    valid_senhaNova = true;
  }
});

emailNovo.addEventListener("input", () => {
  if (emailNovo.value.length <= 8) {
    labelEmailNovo.setAttribute("style", "color: red");
    labelEmailNovo.innerHTML = "E-mail *Invalido";
    emailNovo.setAttribute("style", "border-color:red");
    valid_emailNovo = false;
  } else {
    labelEmailNovo.setAttribute("style", "color:green");
    email.setAttribute("style", "color:green");
    labelEmailNovo.innerHTML = "E-mail";
    valid_emailNovo = true;
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
    Label_Estado.setAttribute("style", "color:red");
    Label_Estado.innerHTML = "Digite o seu Estado *Invalido";
    estado.setAttribute("style", "border-color:red");
    valid_estado = false;
  } else {
    Label_Estado.setAttribute("style", "color:green");
    Label_Estado.innerHTML = "Digite o seu Estado";
    estado.setAttribute("style", "border-color:green");
    valid_estado = true;
  }
});

formApagarEditar.addEventListener("submit", (event) => {
  event.preventDefault();
});

btnEditar.addEventListener("click", () => {
  let email = document.getElementById("Email").value;
  let Nome = document.getElementById("Nome").value;
  let Cidade = document.getElementById("Cidade").value;
  let Estado = document.getElementById("Estado").value;
  let senha = document.getElementById("Senha").value;
  let CloneS = document.getElementById("Repetir-Senha").value;
  let senhaNova = document.getElementById("SenhaNova").value;
  let emailNovo = document.getElementById("Email_Novo").value;
  if (
    valid_username &&
    valid_cidade &&
    valid_cloneP &&
    valid_password &&
    valid_email &&
    valid_emailNovo &&
    valid_senhaNova
  ) {
    var users1 = JSON.parse(localStorage.getItem("users") || "[]");
    if (senha === CloneS) {
      var userExists = users1.some(function (user) {
        return user.Email === email;
      });
    }
    if (userExists && senhaNova.length === 0 && emailNovo.length === 0) {
      var novosDados = {
        Cidade: Cidade,
        Estado: Estado,
        Email: email,
        Password: senha,
        Nome: Nome,
      };
      var indiceParaEditar = -1;
      for (var i = 0; i < users1.length; i++) {
        if (users1[i].Email === email) {
          indiceParaEditar = i;
          break;
        }
      }
      if (indiceParaEditar !== -1) {
        if (users1[indiceParaEditar].Password === senha) {
          Object.assign(users1[indiceParaEditar], novosDados);
          localStorage.setItem("users", JSON.stringify(users1));
        }
      } else {
        alert("Usuario não Encontrado.");
        alert("Senha Está Incorreta");
      }
    } else if (userExists && senhaNova.length !== 0 && emailNovo === 0) {
      var novosDados = {
        Cidade: Cidade,
        Estado: Estado,
        Email: email,
        Password: senhaNova,
        Nome: Nome,
      };
      var indiceParaEditar = -1;
      for (var i = 0; i < users1.length; i++) {
        if (users1[i].Email === email) {
          indiceParaEditar = i;
          break;
        }
      }
      if (indiceParaEditar !== -1) {
        if (users1[indiceParaEditar].Password === senha) {
          Object.assign(users1[indiceParaEditar], novosDados);
          localStorage.setItem("users", JSON.stringify(users1));
        }
      } else {
        alert("Usuario não Encontrado.");
      }
    } else if (userExists && emailNovo.length !== 0 && senhaNova.length === 0) {
      var novosDados = {
        Cidade: Cidade,
        Estado: Estado,
        Email: emailNovo,
        Password: senha,
        Nome: Nome,
      };
      var indiceParaEditar = -1;
      for (var i = 0; i < users1.length; i++) {
        if (users1[i].Email === email) {
          indiceParaEditar = i;
          break;
        }
      }
      if (indiceParaEditar !== -1) {
        let teste = false;
        if (users1[indiceParaEditar].Password === senha) {
          for (var i = 0; i < users1.length; i++) {
            if (users1[i].Email === emailNovo) {
              teste = true;
              break;
            }
          }
          if (!teste) {
            Object.assign(users1[indiceParaEditar], novosDados);
            localStorage.setItem("users", JSON.stringify(users1));
          } else {
            alert("Email já Existe");
          }
        }
      } else {
        alert("Usuario não Encontrado.");
      }
    } else if (userExists && emailNovo.length !== 0 && senhaNova.length !== 0) {
      var novosDados = {
        Cidade: Cidade,
        Estado: Estado,
        Email: emailNovo,
        Password: senhaNova,
        Nome: Nome,
      };
      var indiceParaEditar = -1;
      for (var i = 0; i < users1.length; i++) {
        if (users1[i].Email === email) {
          indiceParaEditar = i;
          break;
        }
      }
      if (indiceParaEditar !== -1) {
        if (users1[indiceParaEditar].Password === senha) {
          let teste = false;
          for (var i = 0; i < users1.length; i++) {
            if (users1[i].Email === emailNovo) {
              teste = true;
              break;
            }
          }
          if (!teste) {
            Object.assign(users1[indiceParaEditar], novosDados);
            localStorage.setItem("users", JSON.stringify(users1));
          } else {
            alert("E-mail já esta em uso");
          }
        }
      } else {
        alert("Usuario não Encontrado.");
      }
    } else {
      alert("Usuario não Encontrado");
    }
  } else {
    alert("Campos em Branco Por favor os preencha");
  }
});
btnApagar.addEventListener("click", () => {
  let email = document.getElementById("Email").value;
  openModal(`Deseja Apagar Conta ${email} ? `);
  document.querySelector("#sim").addEventListener("click", () => {
    var users1 = JSON.parse(localStorage.getItem("users") || "[]");
    var userExists = users1.some(function (users) {
      return users.Email === email;
    });
    if (userExists) {
      var indiceParaExcluir = -1;
      for (var i = 0; i < users1.length; i++) {
        if (users1[i].Email === email) {
          indiceParaExcluir = i;
          break;
        }
      }
      if (indiceParaExcluir !== -1) {
        users1.splice(indiceParaExcluir, 1);
        localStorage.setItem("users", JSON.stringify(users1));
        console.log("Usuario removido com sucesso.");
        alert("Usuario removido com Sucesso.");
      } else {
        console.log("Usuario não encontrado.");
      }
    }
  });
});
