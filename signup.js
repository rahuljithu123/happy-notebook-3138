let form = document.querySelector("form");

let signupLS = JSON.parse(localStorage.getItem("signupData")) || [];



function signupFunc(event) {
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
            // window.location.href = "#"
    } else {
        alert("Fill the details")
    }

}




//