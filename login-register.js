const showLoginPassword = document.querySelector("#login-password");
const showRegisterPassword = document.querySelector('#register-password');
const showConfirmRegisterPassword = document.querySelector('#register-confirm-password');

  function passwordVisibility1(){
        if (showLoginPassword.type === "password") {
          showLoginPassword.type = "text";
        } else {
          showLoginPassword.type = "password";
        } 
    }

    function passwordVisibility2(){
        if (showRegisterPassword.type === "password") {
          showSignUpPassword.type = "text";
        } else {
          showRegisterPassword.type = "password";
        } 
    }

    function passwordVisibility3(){
      if (showConfirmRegisterPassword.type === "password") {
        showConfirmRegisterPassword.type = "text";
        } else {
          showConfirmRegisterPassword.type = "password";
        } 
    }

    function RegisterConfirmation(){
      const registerPasswords = {
        password1: String(showRegisterPassword.value),
        password2: String(showConfirmRegisterPassword.value)
      }
      localStorage.setItem('storage',JSON.stringify(registerPasswords));
      
      if (registerPasswords.password1 === "", registerPasswords.password2 === "") {
        alert("Please fill in all fields !");
      }
      else {
        if(registerPasswords.password1 === registerPasswords.password2){
            location.href = "homepage.html";
            alert('Register Successfully !'); 
          } 
        else {
            alert('Password is not the same.');
            location.href();
          }
        }
      }

      function loginConfirmation() {
        if (document.querySelector('#login-username').value === "", document.querySelector('#login-password').value === "") {
          alert ("Please fill in all fields !")
        } else {
          location.href = "homepage.html";
          alert ("Login Successfully !");
        }
      }
    