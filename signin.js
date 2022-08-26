document.querySelector("form").addEventListener("click", loginFunc)


let users = JSON.parse(localStorage.getItem("signupData")) || [];

function loginFunc(event) {
    event.preventDefault();
    let data = {
        userEmail: document.querySelector("#emailRP").value,
        userPassword: document.querySelector("#passwordRP").value,
    };

    if (checkSignin(data.userEmail, data.userPassword) == true) {
        localStorage.setItem("signinData", JSON.stringify(data));
        alert("sign in successful");
        // window.location.href = "index.html";
    } else {
        alert("worng email or password");
    }

    function checkSignin(email, password) {
        let filter = users.filter(function(ele) {
            return ele.Email == email && ele.Password == password;
        });
        if (filter.length > 0) {
            return true;
        } else {
            return false;
        }
    }
}