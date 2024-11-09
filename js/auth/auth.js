const users = JSON.parse(localStorage.getItem('users')) || [];

function generateToken() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        const token = generateToken();
        localStorage.setItem('authToken', token);
        window.location.href = './profile/index.html';
    } else {
        alert('Invalid username or password.');
    }
}

function register() {
    const username = document.getElementById('newUsername').value;
    const email = document.getElementById('newEmail').value;
    const password = document.getElementById('newPassword').value;

    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        alert('Username already exists. Please choose another one.');
        return;
    }

    const newUser = { username, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    alert('Registration successful! Please log in.');
    window.location.href = '../index.html';
}

function isLoggedIn() {
    return localStorage.getItem('authToken') !== null;
}

function logout() {
    localStorage.removeItem('authToken');
    alert('You have been logged out.');
    window.location.href = '../index.html';
}
