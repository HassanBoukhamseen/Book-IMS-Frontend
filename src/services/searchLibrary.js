const retrieveSearchResultsWithLogIn = (searchInput, start, end, token) => {
    console.log(token);
    return fetch(`http://localhost:8000/books/users/by-search-input/${searchInput}?start=${start}&end=${end}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }
    )
    .then(response => response.json())
    .catch(error => {
        console.log(error);
        throw error;
    });
}


const retrieveSearchResultsWithoutLogIn = (searchInput, start, end) => {
    return fetch(`http://localhost:8000/books/by-search-input/${searchInput}?start=${start}&end=${end}`)
    .then(response => response.json())
    .catch(error => {
        console.log(error)
        throw error
    })
}

export { retrieveSearchResultsWithoutLogIn, retrieveSearchResultsWithLogIn };

