let form = document.getElementById("form");
let nameInput = document.getElementById("full-name");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let ageInput = document.getElementById("age");
let cityInput = document.getElementById("city");
let genderInputs = document.getElementsByName("gender");
let aboutInput = document.getElementById("about");

form.addEventListener("submit", function(e) {
    e.preventDefault(); 

    if (validateForm()) {
        showModal(); 
    }
});

function validateForm() {
    let isValid = true;
    let messages = [];

    if (nameInput.value.trim().length < 2) {
        messages.push("Name must be at least 2 characters long!");
        isValid = false;
    }

    if (!emailInput.value.includes("@")) {
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
        messages.push("Please select an option!");
        isValid = false;
    }

    if (!isValid) {
        alert(messages.join("\n"));
    }

    return isValid;
}


function showModal() {
    alert("The form was successfully completed!");
    form.reset();
}



