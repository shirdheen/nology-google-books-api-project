const API_URL = "https://www.googleapis.com/books/v1/volumes";
const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

const filterBooks = (books, query) => {
  const lowerCaseQuery = query.toLowerCase();
  return books.filter((item) => {
    const volumeInfo = item.volumeInfo || {};
    const { title = "", description = "", authors = [] } = volumeInfo;

    return (
      title.toLowerCase().includes(lowerCaseQuery) ||
      description.toLowerCase().includes(lowerCaseQuery) ||
      authors.some((author) => {
        author.toLowerCase().includes(lowerCaseQuery);
      })
    );
  });
};

export const fetchBooks = async (query) => {
  try {
    const response = await fetch(
      `${API_URL}?q=${query}&orderBy=relevance&maxResults=40&&key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch books: ${response.statusText}`);
    }
    const data = await response.json();
    if (!data.items || data.items.length === 0) {
      throw new Error("Sorry, no books found for this query.");
    }
    const filteredBooks = filterBooks(data.items, query);
    if (filteredBooks.length === 0) {
      throw new Error("Sorry, no books matched your search query.");
    }
    return data.items || [];
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};
