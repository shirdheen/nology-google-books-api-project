import BookCard from "../BookCard/BookCard";

const BookGrid = ({ books }) => {
  return (
    <div>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookGrid;
