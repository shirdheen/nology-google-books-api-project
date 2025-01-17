import { useState } from "react";
import Header from "./components/Header/Header";
import SearchForm from "./components/SearchForm/SearchForm";
import { fetchBooks } from "./services/google-books-api.js";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner.jsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
import BookGrid from "./components/BookGrid/BookGrid.jsx";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (query) => {
    setBooks([]);
    setLoading(true);
    setError("");
    try {
      const fetchedBooks = await fetchBooks(query);
      setBooks(fetchedBooks);
    } catch (e) {
      setError("Oops, failed to fetch books. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <SearchForm onSearch={handleSearch} />
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
      <BookGrid books={books} />
    </>
  );
}

export default App;
