let passwordInput = document.getElementById("inputPassword");

let passwordRepeat = document.getElementById("inputPasswordRepeat");

let passwordMessage = document.getElementById("passwordMessage");

passwordInput.classList.add("invalid");
passwordRepeat.classList.add("invalid")
passwordInput.validity.valid = false;
// compare the text in both password fields and change the css applied
// based on if they match or not
function checkMatch() {
    if (passwordInput.value === passwordRepeat.value && passwordInput.value !== "") {
        passwordInput.classList.remove("invalid");
        passwordRepeat.classList.remove("invalid");
        passwordInput.classList.add("valid");
        passwordRepeat.classList.add("valid");
        passwordMessage.innerText = "*Passwords match";
        passwordMessage.style.color = "green";
        passwordInput.validity.valid = true;
        passwordInput.setCustomValidity("");
    } else {
        passwordInput.classList.remove("valid");
        passwordRepeat.classList.remove("valid");
        passwordInput.classList.add("invalid");
        passwordRepeat.classList.add("invalid");
        passwordMessage.innerText = "*Passwords do not match";
        passwordMessage.style.color = "red";
        passwordInput.validity.valid = false;
        passwordInput.setCustomValidity("Passwords do not match");
    }
}

// calls function after every key the user presses in the password inputs
passwordInput.onkeyup = function() {
    checkMatch();
};

passwordRepeat.onkeyup = function() {
    checkMatch();
};
