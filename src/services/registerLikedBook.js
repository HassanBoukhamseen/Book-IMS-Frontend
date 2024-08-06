const registerLikedBook = (book_id, token) => {
    return fetch(`http://localhost:8000/books/like/${book_id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .catch(error => {
        console.error('Error fetching users:', error);
        throw error;
    });
}

export default registerLikedBook