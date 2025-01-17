import { useState } from "react";
import classes from "./SearchForm.module.scss";

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    if (error) {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      setError("Please enter a search term!");
      return;
    }
    onSearch(query);
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
      {error && <p className={classes.error}>{error}</p>}
    </div>
  );
};
export default SearchForm;
