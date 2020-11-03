"use strict";

class Validator {
  constructor() {
    //predetermined error messages
    this.invalidEmailError = "Enter a valid email address";
    this.repeatPasswordError = "The Passwords are not the same buddy!";
    this.emailExistsError = "Oops the email address is already taken";
    this.passwordError = "Password must be at least 6 characters long";

    // object with all the current erros that are shown to the user
    this.errors = {
      invalidEmailError: this.invalidEmailError,
      passwordError: this.passwordError,
      repeatPasswordError: this.repeatPasswordError,
    };
  }

  validateValidEmail = (email) => {
    //validate if the syntax is correct
    if (this.emailSyntaxIsValid(email)) {
      delete this.errors.invalidEmailError;
    } else {
      this.errors.invalidEmailError = this.invalidEmailError;
    }
  };

  emailSyntaxIsValid = (email) => {
    const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    const emailIsValid = emailRegEx.test(email);
    return emailIsValid;
  };

  validateUniqueEmail = (newEmail) => {
    const users = db.getAllUser();

    let emailUnique = true;

    users.forEach((userObj) => {
      if (userObj.email === newEmail) {
        emailUnique = false; //set emailUnique to false if the email has been taken
      }
    });

    if (emailUnique) {
      delete this.errors.emailExistsError;
    } else {
      this.errors.emailExistsError = this.emailExistsError;
    }
  };

  validatePassword = (password) => {
    if (password.length >= 6) {
      delete this.errors.passwordError;
    } else {
      this.errors.passwordError = this.passwordError;
    }
  };

  validateRepeatPassword = (password, repeatPassword) => {
    //console.log(password, repeatPassword);
    if (password === repeatPassword) {
      delete this.errors.repeatPasswordError;
    } else {
      this.errors.repeatPasswordError = this.repeatPasswordError;
    }
  };

  getErrors = () => {
    return this.errors;
  };
}

const validator = new Validator();
