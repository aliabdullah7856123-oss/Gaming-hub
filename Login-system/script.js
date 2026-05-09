function register(){

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    document.getElementById("message").innerHTML =
    "Registration Successful";
}

function login(){

    let loginEmail =
    document.getElementById("loginEmail").value;

    let loginPassword =
    document.getElementById("loginPassword").value;

    let savedEmail = localStorage.getItem("email");
    let savedPassword = localStorage.getItem("password");

    if(loginEmail === savedEmail &&
       loginPassword === savedPassword){

        document.getElementById("message").innerHTML =
        "Login Successful";

    }else{

        document.getElementById("message").innerHTML =
        "Wrong Email or Password";
    }
}