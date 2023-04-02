let loginBtn = document.getElementById("loginBtn1");
let loginData = JSON.parse(localStorage.getItem("loginData")) || [];
loginBtn.addEventListener("click", function () {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    let dataObj = {
        name: name.value,
        email: email.value,
        password: password.value,
    };
    loginData.push(dataObj);
    localStorage.setItem("loginData", JSON.stringify(loginData));
    alert("Sign up completed");
    location.reload();
});
