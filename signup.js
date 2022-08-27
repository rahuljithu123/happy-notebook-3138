let signUpLS = JSON.parse(localStorage.getItem("signupData")) || [];

document.querySelector("form").addEventListener("submit", signupFunc);

function signupFunc(event) {
    event.preventDefault()
    let signupObj = {
        Email: document.getElementById("emailRP").value,
        Password: document.getElementById("passwordRP").value,

    };

    if (signupObj.Email.length > 0 && signupObj.Password.length > 0) {
        alert("Signup Sucessful");
        window.location.href = "signin.html";
    } else if (signupObj.Password.length < 5) {
        alert("Enter atlest 6 char strong password");
    }
    signUpLS.push(signupObj);
    localStorage.setItem("signupData", JSON.stringify(signUpLS));
}