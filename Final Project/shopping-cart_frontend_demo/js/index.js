
$(document).ready(function () {

    var usernameInput = document.getElementById("username");
      var passwordInput = document.getElementById("password");
      var usernameError = document.getElementById("username-error");
      var passwordError = document.getElementById("password-error");

      function validateForm() {
        let username = usernameInput.value;
        let password = passwordInput.value;
        let valid = true;

        if (username === "") {
            usernameError.textContent = "Please enter a username.";
            usernameInput.focus();
            valid = false;
            }
        else {
            usernameError.innerText = "";
            }

        if (password === "") {
            passwordError.textContent = "Please enter a password.";
            passwordInput.focus();
            valid = false;
            }
        else {
            passwordError.innerText = "";
            }

        return valid;
      }

      async function loginUser(username, password) {
        const response = await fetch("http://localhost:3000/login", {
          method: "POST",
          body: JSON.stringify({
            username: username,
            password: password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        console.log(data);
        if (data.error) {
          return data.error;
        } else {
            sessionStorage.setItem("userContext", JSON.stringify(data));
            return true;
        }
      }

      usernameInput.addEventListener("input", function() {
        usernameError.textContent = "";
      });
    
      passwordInput.addEventListener("input", function() {
        passwordError.textContent = "";
      });

      $("form").on("submit",  async (event) => {
        event.preventDefault(); 

        if(validateForm()){
            let username = usernameInput.value;
            let password = passwordInput.value;
            const result = await loginUser(username, password);
            if (result === true) {
                window.location.href = '/product.html'; 
            } else {
                passwordError.textContent = "Invalid credential.";
            }
        }
      });

  });

  