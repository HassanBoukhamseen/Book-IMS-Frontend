const retrieveSearchResults = (searchInput, start, end) => {
    return fetch(`http://localhost:8000/books/by-search-input/${searchInput}?start=${start}&end=${end}`)
    .then(response => response.json())
    .catch(error => {
        console.log(error)
        throw error
    })
}

export default retrieveSearchResults;

