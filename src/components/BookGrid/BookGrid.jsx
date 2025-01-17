import BookCard from "../BookCard/BookCard";
import classes from "./BookGrid.module.scss";

const BookGrid = ({ books }) => {
  return (
    <div className={classes.grid}>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookGrid;
