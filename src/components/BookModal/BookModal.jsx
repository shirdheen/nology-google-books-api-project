import classes from "./BookModal.module.scss";

const BookModal = ({ book, onClose }) => {
  if (!book) {
    return null;
  }
  const {
    title,
    authors,
    description,
    publisher,
    categories,
    language,
    imageLinks,
  } = book.volumeInfo;

  return (
    <div className={classes.modalOverlay} onClick={onClose}>
      <div
        className={classes.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={classes.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={classes.bookDetails}>
          {imageLinks && imageLinks.thumbnail && (
            <img
              src={
                imageLinks?.thumbnail ||
                "https://bookstoreromanceday.org/wp-content/uploads/2020/08/book-cover-placeholder.png"
              }
              alt={title || "No title"}
              className={classes.image}
            />
          )}
          <h2 className={classes.title}>{title || "No Title Available"}</h2>
          {authors && (
            <h3 className={classes.authors}>
              {authors
                ? authors.length > 1
                  ? authors.join(", ")
                  : authors[0]
                : "Unknown author"}
            </h3>
          )}
          {categories && (
            <p className={classes.category}>
              <strong>Category: </strong>
              {categories ? categories.join(", ") : "Uncategorised"}
            </p>
          )}
          {publisher && (
            <p className={classes.publisher}>
              <strong>Publisher: </strong>
              {publisher || "Unknown publisher"}
            </p>
          )}
          {language && (
            <p className={classes.language}>
              <strong>Language: </strong>
              {language ? language.toUpperCase() : "Unknown"}
            </p>
          )}
          {description && <p className={classes.language}>{description}</p>}
        </div>
      </div>
    </div>
  );
};
export default BookModal;
