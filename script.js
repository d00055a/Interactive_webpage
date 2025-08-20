let form = document.getElementById("form");
let nameInput = document.getElementById("full-name");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let ageInput = document.getElementById("age");
let cityInput = document.getElementById("city");
let genderInputs = document.getElementsByName("gender");
let aboutInput = document.getElementById("about");

// Modal elements
let modal = document.getElementById("modal");
let modalMessage = document.getElementById("modal-message");
let closeModalBtn = document.getElementById("close-modal");

// Event listener for form
form.addEventListener("submit", function(e) {
    e.preventDefault(); 

    if (validateForm()) {
        showModal("The form was successfully completed!");
        form.reset();
    }
});

// Function for form validation
function validateForm() {
    let isValid = true;
    let messages = [];

    if (nameInput.value.trim().length < 2) {
        messages.push("Name must be at least 2 characters long!");
        isValid = false;
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/; 
    if (!emailPattern.test(emailInput.value)) {
        messages.push("Email is not valid!");
        isValid = false;
    }

    if (passwordInput.value.length < 8) {
        messages.push("Password must be at least 8 characters long!");
        isValid = false;
    }

    const age = parseInt(ageInput.value);
    if (age < 16 || age > 110) {
        messages.push("Age must be between 16 and 110!");
        isValid = false;
    }

    if (cityInput.value === "") {
        messages.push("Please select a city!");
        isValid = false;
    }

    let genderSelected = false;
    for (let radio of genderInputs) {
        if (radio.checked) {
            genderSelected = true;
            break;
        }
    }
    if (!genderSelected) {
        messages.push("Please select a gender option!");
        isValid = false;
    }

    if (!isValid) {
        showModal(messages.join("<br>")); 
    }

    return isValid;
}

// Modal functions
function showModal(message) {
    modalMessage.innerHTML = message;
    modal.classList.remove("hidden");
}

closeModalBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
});

