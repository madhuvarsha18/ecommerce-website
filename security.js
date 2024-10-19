function validateForm(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');

    // Example validation: Username should be an email, password length should be at least 8 characters
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(username)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
        return false;
    }

    if (password.length < 8) {
        errorMessage.textContent = 'Password must be at least 8 characters long.';
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
        return false;
    }

    // Clear any previous error message
    errorMessage.style.display = 'none';
    successMessage.textContent = 'Thanks for login!';
    successMessage.style.display = 'block';
    return true; // Here you can proceed with form submission if needed
}
