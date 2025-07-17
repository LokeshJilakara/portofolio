function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(name)) {
        alert("Please enter a valid name (only alphabets allowed).");
        return;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number (only numbers allowed, 10 digits).");
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (message.trim() === "") {
        alert("Please enter a message.");
        return;
    }

    console.log("Form submitted with the following information:");
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Phone: ", phone);
    console.log("Message: ", message);

    document.getElementById("contactForm").reset();
    alert("Thank you for your message, we will get back to you soon!");
}

document.getElementById("contactForm").addEventListener("submit", handleSubmit);
