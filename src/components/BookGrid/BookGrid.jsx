import BookCard from "../BookCard/BookCard";
import classes from "./BookGrid.module.scss";

const BookGrid = ({ books, onBookClick }) => {
  return (
    <div className={classes.grid}>
      {books.map((book) => (
        <BookCard key={book.id} book={book} onClick={() => onBookClick(book)} />
      ))}
    </div>
  );
};

export default BookGrid;
