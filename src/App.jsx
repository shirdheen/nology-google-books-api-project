import { useState } from "react";
import Header from "./components/Header/Header";
import SearchForm from "./components/SearchForm/SearchForm";
import { fetchBooks } from "./services/google-books-api.js";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner.jsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
import BookGrid from "./components/BookGrid/BookGrid.jsx";
import BookModal from "./components/BookModal/BookModal.jsx";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

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

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  return (
    <>
      <Header />
      <SearchForm onSearch={handleSearch} />
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
      <BookGrid books={books} onBookClick={handleBookClick} />
      {selectedBook && (
        <BookModal book={selectedBook} onClose={handleCloseModal} />
      )}
    </>
  );
}

export default App;
