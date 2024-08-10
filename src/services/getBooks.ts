type OrderBy = string | null;

interface BookResponse {
  book_id: number;
  title: string;
  author_name: string;
  subtitle: string;
  thumbnail: string;
  genre: string;
  description: string;
  year: number;
  rating: number;
  num_pages: number;
  ratings_count: number;
  liked: number;
}

export interface FetchBooksResponse {
  message: string;
  books: BookResponse[];
  count: number;
}

async function retrieveBooksWithoutLogIn(start: number, end: number, orderBy: OrderBy = null): Promise<FetchBooksResponse> {
  const endpoint = orderBy == null ? (
    `http://localhost:8000/books?start=${start}&end=${end}`
  ) : (
    `http://localhost:8000/books?start=${start}&end=${end}&order_by=${orderBy}`
  );

  try {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function retrieveBooksWithLogIn(start: number, end: number, orderBy: OrderBy, token: string): Promise<FetchBooksResponse> {
  const endpoint = orderBy == null ? (
    `http://localhost:8000/books/users?start=${start}&end=${end}`
  ) : (
    `http://localhost:8000/books/users?start=${start}&end=${end}&order_by=${orderBy}`
  );

  try {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export { retrieveBooksWithoutLogIn, retrieveBooksWithLogIn };
