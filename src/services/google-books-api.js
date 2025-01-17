const API_URL = "https://www.googleapis.com/books/v1/volumes";
const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

export const fetchBooks = async (query) => {
  try {
    const response = await fetch(
      `${API_URL}?q=${query}&orderBy=relevance&maxResults=20&&key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch books: ${response.statusText}`);
    }
    const data = await response.json();
    if (!data.items || data.items.length === 0) {
      throw new Error("No books found for this query.");
    }
    return data.items || [];
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};
