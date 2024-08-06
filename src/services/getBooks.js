function retrieveBooksWithoutLogIn(start, end, orderBy) {
    const endpoint = orderBy == null ? (
        `http://localhost:8000/books?start=${start}&end=${end}` 
    ) : (
        `http://localhost:8000/books?start=${start}&end=${end}&order_by=${orderBy}`
    )
    return fetch(endpoint, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .catch(error => {
        console.log(error);
        throw error;
    });
}

function retrieveBooksWithLogIn(start, end, orderBy, token) {
    const endpoint = orderBy == null ? (
        `http://localhost:8000/books/users?start=${start}&end=${end}` 
    ) : (
        `http://localhost:8000/books/users?start=${start}&end=${end}&order_by=${orderBy}`
    )
    return fetch(endpoint, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .catch(error => {
        console.log(error);
        throw error;
    });
}

export { retrieveBooksWithoutLogIn, retrieveBooksWithLogIn };
