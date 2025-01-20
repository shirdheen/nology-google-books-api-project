import { useState } from "react";
import Header from "./components/Header/Header";
import SearchForm from "./components/SearchForm/SearchForm";
import { fetchBooks } from "./services/google-books-api-fetch.js";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner.jsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
import BookGrid from "./components/BookGrid/BookGrid.jsx";
import BookModal from "./components/BookModal/BookModal.jsx";
import SkeletonCard from "./components/SkeletonCard/SkeletonCard.jsx";
import classes from "./App.module.scss";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const [openModal, setopenModal] = useState(false);

  const handleSearch = async (query) => {
    setBooks([]);
    setLoading(true);
    setError("");
    try {
      const fetchedBooks = await fetchBooks(query);
      setBooks(fetchedBooks);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setopenModal(true);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
    setopenModal(false);
  };

  return (
    <>
      <Header />
      <SearchForm onSearch={handleSearch} />
      {loading && (
        <>
          <LoadingSpinner />
          <div className={classes.skeletonGrid}>
            {Array(40)
              .fill(0)
              .map((_, index) => (
                <SkeletonCard key={index} />
              ))}
          </div>
        </>
      )}
      {error && <ErrorMessage message={error} />}
      <BookGrid books={books} onBookClick={handleBookClick} />
      {selectedBook && (
        <BookModal
          isOpen={openModal}
          book={selectedBook}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}

export default App;
