window.onload = function () {
  document
    .getElementById("login-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      var users = JSON.parse(localStorage.getItem("users"));
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      var userExists = users.some(function (user) {
        return user.Email === username && user.Password === password;
      });
      if (userExists) {
        window.location.href = "index.html";
      } else {
        alert("Nome de usuário ou senha incorretos");
      }
    });
};
