export interface User {
  email: string;
  fname: string;
  lname: string;
  role: string;
  password: string;
}

export interface UsersResponse {
  message: string;
  users: User[];
}

async function getUsers(token: string): Promise<UsersResponse> {
  try {
    const response = await fetch(`http://localhost:8000/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

export default getUsers;
