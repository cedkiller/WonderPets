const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});


let users = [];

function signup() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        alert('User already exists with this email!');
        return;
    }

    users.push({ name, email, password });
    alert('Registration successful!');
    // Optionally clear the form or redirect to the sign-in section
}

function signin() {
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;
    
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        window.location.href = "./daily/index.html";
    } else {
        alert('Invalid email or password!');
    }
}