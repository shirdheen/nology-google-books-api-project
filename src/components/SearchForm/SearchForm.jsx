import { useState } from "react";
import classes from "./SearchForm.module.scss";

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.prevenDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
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
  );
};
export default SearchForm;
