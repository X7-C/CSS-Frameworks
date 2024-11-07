function login() {
    const token = ''; 
    localStorage.setItem('authToken', token);
    window.location.href = '../profile/index.html';
}

function isLoggedIn() {
    return localStorage.getItem('authToken') !== null;
}

function logout() {
    localStorage.removeItem('authToken');
    alert('You have been logged out.');
    window.location.href = '../index.html';
}
