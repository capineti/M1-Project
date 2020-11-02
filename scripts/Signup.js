"use strict";

class Signup {
  constructor() {
    //store all of the input elements
    this.nameInput = document.querySelector("#name");
    this.emailInput = document.querySelector("#email");
    this.passwordInput = document.querySelector("#password");
    this.repeatPasswordInput = document.querySelector("#repeat-password");

    this.buttonInput = document.querySelector("#signup-button");
    this.errorWraper = document.querySelector(
      ".message-container"
    ); /* Why we use a class instead of an id?*/
  }

  //handle the email input
  handleEmailInput = (event) => {
    const emailInput = event.target;
    const email = emailInput.value;
  };

  //handle the password input
  handlePasswordInput = (event) => {
    const passwordInput = event.target;
    const password = passwordInput.value;
  };

  //handle the repeat-password input
  //password confirmation
  handleRepeatPasswordInput = (event) => {
    const repeatPasswordInput = event.target;
    const repeatPasword = repeatPasswordInput.value;
  };

  //handle the sending of the data (on submit)
  saveData = (event) => {
    //Prevent the default behaviour of the form submit button
    //wich reloads the page
    event.preventDefault();

    //get the value from all the inputs
    const name = this.nameInput.value;
    const email = this.emailInput.value;
    const password = this.passwordInput.value;

    //create the new user
    const newUser = new newUser(name, email, password);
    console.log("newUser",newUser);
    //Save the user in the database

    

    //empty the form

    this.nameInput.value = "";
    this.emailInput.value = "";
    this.passwordInput.value = "";
  };

  addEventListener = () => {
    this.emailInput.addEventListener("input", this.handleEmailInput);
    this.passwordInput.addEventListener("input", this.handlePasswordInput);
    this.repeatPasswordInput.addEventListener(
      "input",
      this.repeatPasswordInput
    );

    this.buttonInput.addEventListener("click", this.saveData);
  };
}
//create an instance of th Signup (object)
const signup = new Signup();

//Add event listener once the page and all the resources are loaded
window.addEventListener("load", signup.addEventListener);
