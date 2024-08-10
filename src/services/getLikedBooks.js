const getLikedBooks = (token, start, end, setDisplayType) => {
    return fetch(`http://localhost:8000/books/users/liked-books?start=${start}&end=${end}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (!response.ok) {
            alert("No Liked Books Found")
            setDisplayType("all")
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .catch(error => {
        console.log('Fetch error:', error);
        throw error;
    });
}
    


export default getLikedBooks;