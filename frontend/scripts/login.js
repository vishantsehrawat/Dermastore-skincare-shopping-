let loginBtn = document.getElementById("loginBtn1");
let loginData = JSON.parse(localStorage.getItem("loginData")) || [];
let loginSuccessfull = 0;
let login = false;
loginBtn.addEventListener("click", function () {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    loginData.forEach((el, index) => {
        if (el.email == email && el.password == password) {
            login = true;
            loginSuccessfull = 1;
            localStorage.setItem("loginSuccess", loginSuccessfull);
        } else if (el.email != email && el.password != password) {
            login = false;
        }
        if (login == true) {
            alert("LOGIN SUCCESSFULL");
            window.location.href = "./home.html";
        } else {
            alert("WRONG CREDENTIALS");
        }
    });
});
