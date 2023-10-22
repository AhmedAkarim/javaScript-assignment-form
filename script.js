let users = [];

function Register() {

    let userName = document.getElementById("userName").value;
    let userEmail = document.getElementById("userEmail").value;
    let userPassword = document.getElementById("userPassword").value;

    let user = {};

    user.name = userName;
    user.email = userEmail;
    user.password = userPassword;

    users.push(user);
    console.log(users)

    document.getElementById("userName").value = "";
    document.getElementById("userEmail").value = "";
    document.getElementById("userPassword").value = "";
}

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    for (let i = 0; i < users.length; i++) {
        if (email == users[i].email) {
            if (password == users[i].password) {
                window.alert('Login Successful')
            } else {
                window.alert('Please enter correct password or email')
            }
        }
    }

    document.getElementById("email").value = '';
    document.getElementById("password").value = '';
}