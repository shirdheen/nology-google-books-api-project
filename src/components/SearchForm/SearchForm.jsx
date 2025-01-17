import { useState } from "react";
import classes from "./SearchForm.module.scss";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) {
      setError("Please enter a search term!");
      return;
    }

    try {
      await onSearch(query);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    }
    setQuery("");
  };

  return (
    <div className={classes.wrapper}>
      <form onSubmit={handleSubmit} className={classes.searchForm}>
        <input
          type="text"
          placeholder="Search for books..."
          value={query}
          onChange={handleInputChange}
          className={classes.input}
        />
        <button type="submit" className={classes.button}>
          Search <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      {error && <ErrorMessage message={error} />}
    </div>
  );
};
export default SearchForm;
