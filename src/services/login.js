async function login(username, password) {
    return fetch("http://localhost:8000/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(response => response.json())
    // .then(response => console.log(response))
    .catch(error => {
        console.log(error);
        throw error;
    });
}

export default login;

