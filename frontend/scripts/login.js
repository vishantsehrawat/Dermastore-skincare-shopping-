// const url = "http://localhost:8080/user/login";
const url = "https://tiny-rose-chicken-tutu.cyclic.app/user/login";


let loginBtn = document.getElementById("loginBtn1");
let loginData = JSON.parse(localStorage.getItem("loginData")) || [];
let loginSuccessfull = 0;
let login = false;
loginBtn.addEventListener("click", function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let obj = {
        email, password
    }
    // now using the constructor function we will create a new user
    const loginUser = obj
	console.log("TCL: loginUser", loginUser)

    fetch(url, {
        method: "POST", // or 'PUT'
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(loginUser),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
            sessionStorage.setItem("token", data.token);
            if(data.msg != "User not found"){
                document.getElementById("redirecting").innerText = " Login successfull, redirecting "; 
                setTimeout(() => {
                    window.location.href = "products.html";
                }, 2000);
            }
            else{
                document.getElementById("redirecting").innerText = " Login Error"; 

            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    console.log(obj);
});

