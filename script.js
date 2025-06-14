document.addEventListener('DOMContentLoaded', () => {
    // form selection and feedback
    const form = document.getElementById("registration-form")
    const feedback = document.getElementById("form-feedback");

    //form submission event listener
    form.addEventListener("submit", (event) => {
        event.preventDefault();
    
         //retrive user input
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validate inputs
    let isValid = true;
    const messages = [];

    if (username.length < 3) {
        isValid = false;
        messages.push("Username must be longer than 3 characters.");
    }

    if (!email.includes(".") || !email.includes("@")){
        isValid = false;
        messages.push("Please enter a valid email address.");
    }

    if (password.length < 8) {
        isValid = false;
        messages.push("Password must be at least 6 characters long.");
    }
    
    // Display feedback
    feedback.style.display = "block";
    if (isValid) {
        feedback.textContent = "Registration successful!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = messages.join("<br>");
        feedback.style.color = "red";
    }
    });
});