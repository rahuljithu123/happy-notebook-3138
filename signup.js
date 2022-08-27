let signUpLS = JSON.parse(localStorage.getItem("signupData")) || [];

document.querySelector("form").addEventListener("submit", signupFunc);

function signupFunc(e) {
    e.preventDefault();
    let signupObj = {
        Email: document.getElementById("emailRP").value,
        Password: document.getElementById("passwordRP").value,

    };

    if (signupObj.Email.length > 0 && signupObj.Password.length > 0) {
        console.log("working");
        signUpLS.push(signupObj);
        localStorage.setItem("signupData", JSON.stringify(signUpLS));
        alert("Signup Sucessful");
        window.location.href = "signin.html";
    } else if (signupObj.Email.length === 0) {
        alert("Enter the Email")
    } else if (signupObj.Password.length === 0) {
        alert("Enter the Password")
    }

}

