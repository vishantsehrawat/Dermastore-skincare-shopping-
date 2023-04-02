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
    // loginData.push(dataObj);

    fetch('http://localhost:8080/user/register', {
        method: 'POST',
        body: JSON.stringify(dataObj),
        headers: {
            "Content-type": " application/json"
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Handle response data as needed
      })
      .catch(error => {
        console.error(error);
        // Handle error as needed
      });

    alert("Sign up completed");
    // location.reload();
});
