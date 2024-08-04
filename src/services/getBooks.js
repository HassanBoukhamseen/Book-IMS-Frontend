function retrieveBooks(start, end, orderBy) {
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


export default retrieveBooks;
