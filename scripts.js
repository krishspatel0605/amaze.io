// Reference to the login form
const loginForm = document.getElementById('loginForm');

// Add an event listener for form submission
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Sign in with Firebase Authentication
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log('Login successful:', user);
            alert('Login successful!');
            // Redirect or perform other actions after successful login
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('Error:', errorCode, errorMessage);
            alert('Login failed: ' + errorMessage);
        });
});
