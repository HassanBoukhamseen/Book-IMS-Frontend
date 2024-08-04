const signUp = (inputEmail, inputPass, firstName, lastName) => {
    console.log(
        inputEmail, inputPass, firstName, lastName
    )
    return fetch("http://127.0.0.1:8000/users/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fname: firstName,
            lname: lastName,
            email: inputEmail,
            hashedpw: inputPass,
            role: "0"
        })
    })
    .then(response => response.json())
    .catch(error => {
        console.log(error)
        throw error
    });
}

export default signUp;