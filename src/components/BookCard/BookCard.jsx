import classes from "./BookCard.module.scss";
const BookCard = ({ book }) => {
  const { title, authors, description, imageLinks } = book.volumeInfo;

  const truncateDescription = (text, wordLimit = 10) => {
    if (!text) return "No description available.";
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  return (
    <article className={classes.card} onClick={() => onClick(book)}>
      <img
        className={classes.image}
        src={
          imageLinks?.thumbnail ||
          "https://bookstoreromanceday.org/wp-content/uploads/2020/08/book-cover-placeholder.png"
        }
        alt={title}
      />
      <div className={classes.details}>
        <h3 className={classes.title}>{title || "No title"}</h3>
        {authors && (
          <p className={classes.author}>
            {authors?.join(", ") || "Unknown Author"}
          </p>
        )}
        <p className={classes.description}>
          {truncateDescription(description)}
        </p>
      </div>
    </article>
  );
};
export default BookCard;
