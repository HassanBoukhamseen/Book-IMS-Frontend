const removeLikedBook = (book_id, token) => {
    return fetch(`http://localhost:8000/books/remove-like/${book_id}`, {
        method: "DELETE",
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

export default removeLikedBook