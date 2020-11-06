"use strict";

class Login {
  constructor() {
    this.emailInput = document.querySelector("#email");
    this.passwordInput = document.querySelector("#password");
    this.messageContainer = document.querySelector("#message-container");
    this.loginButton = document.querySelector("#login-button");
  }

  // handle the login
  handleSubmit = (event) => {
    event.preventDefault();

    //get the values from the input
    const email = this.emailInput.value;
    const password = this.passwordInput.value;

    //get the values from the db
    const users = db.getAllUser();
    console.log(users);

    //Check the password and the email exits in the db
    const user = users.find(function (userObj) {
      if (userObj.email === email && userObj.password === password) {
        return true;
      }
    });

    //empty the container so that the messages dont add up
    this.messageContainer.innerHTML = "";
    const p = document.createElement("p");

    if (!user) {
      p.textContent = "Something is wrong with the email or pass";
      // this.messageContainer.appendChild(p);
    } else {
      //const p = document.createElement('p');
      p.textContent = "Hello ${user.name}";
      p.classList.add("correct-message");
      this.redirect();
    }
    this.messageContainer.appendChild(p);
  };
  redirect = () => {
    location.assign("dashboard.html");
  };
}
const login = new Login();

window.addEventListener("load", function () {
  login.loginButton.addEventListener("click", login.handleSubmit);
});
