const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
document.addEventListener('DOMContentLoaded', function () {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    const signUpForm = document.querySelector('.sign-up-container form');

    signUpButton.addEventListener('click', function () {
        container.classList.add('right-panel-active');
    });

    signInButton.addEventListener('click', function () {
        container.classList.remove('right-panel-active');
    });

    signUpForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting normally
        
        // Your sign-up logic here
        
        // Display pop-up message after sign-up
        alert('Thank you for signing up! Your account has been created.');
        
        // Optionally, you can redirect the user or perform any other action here
        
        // Clear the form fields (optional)
        signUpForm.reset();
    });
});
