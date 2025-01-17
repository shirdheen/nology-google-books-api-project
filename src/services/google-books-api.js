const API_URL = "https://www.googleapis.com/books/v1/volumes";
const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

export const fetchBooks = async (query) => {
  try {
    const response = await fetch(
      `${API_URL}?q=${query}&orderBy=newest&maxResults=20&&key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch books: ${response.statusText}`);
    }
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};
