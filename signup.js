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

        event.preventDefault();
        console.log("working")

        let userObj = {
                Email: document.querySelector("#emailRP").value,
                Password: document.querySelector("#passwordRP").value,
            }
            // console.log(userObj)
        signupLS.push(userObj);
        localStorage.setItem("signupData", JSON.stringify(signupLS));
        if (userObj.Email.length > 0 && userObj.Password.length > 0) {
            alert("Signup Succesfull !")
            window.location.href = "signin.html"
        } else {
            alert("Fill the details")

        }
        signUpLS.push(signupObj);
        localStorage.setItem("signupData", JSON.stringify(signUpLS));
    }
}
