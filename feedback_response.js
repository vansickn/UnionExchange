// clarify event-driven programming: change, input, load/DOMContentLoaded, focus, blur, submit
// event.target
// Capturing, at target, and bubbling phases; third parameter of addEventListener
// stopPropagation() and preventDefault()
function toggleContactTextBox() {
    let emailButton = document.getElementById("email");
    let phoneButton = document.getElementById("phone");
    let mailButton = document.getElementById("mail");
    let buttons = [emailButton, phoneButton, mailButton];
    buttons.forEach((button) => {
        button.addEventListener("click", displayContactTextBox);
        button.addEventListener("click", getContactTextBox);
    });
}

function displayContactTextBox() {
    let userInput = document.getElementById("option_input");
    if(this.checked === true){
        userInput.removeAttribute("hidden");
    }
    else{
        userInput.createAttribute("hidden");
    }
}

function getContactTextBox() {
    let userInput = document.getElementById("option_input");
    if(document.getElementById("email").checked === true){
        userInput.setAttribute("type", "email");
    }
    else if(document.getElementById("phone").checked === true){
        userInput.setAttribute("type", "number"); // +x & ...
    }
    else{ // document.getElementById("mail").checked === true
        userInput.setAttribute("type", "text");
    }
    userInput.value = "";
}

function addRatingRange() {
    let ratings = document.getElementsByClassName("rating");
    ratings.forEach((rating) => {
        rating.min = "1";
        rating.max = "5";
    });
    // add listener
}

function shrinkForm() {
    let formElements = document.getElementsByClassName("form-contents");
    formElements.forEach((formElement) => {
        formElement.style.flexShrink = "3";
    });
    // add listener
}

function validateForm() {
    let form = document.querySelector("#feedback");
    let firstName = document.getElementById("first");
    let lastName = document.getElementById("last");
    let contact = document.getElementById("contact_option");
    let motivation = document.getElementsByClassName("user_motivation");
    let comment = document.getElementsByClassName("user_comments");
    let submit = document.getElementById("submit");
    submit.addEventListener("click", function() {

    });
}

function submitForm() {
    let submitButton = document.getElementById("submit");
    // add listener
}

function bodyLoaded() {
    // toggleContactTextBox();
    // getContact();
    // addRatingRange();
    // shrinkForm();
    // submitForm();
}
