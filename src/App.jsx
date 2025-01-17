import Header from "./components/Header/Header";
import SearchForm from "./components/SearchForm/SearchForm";
import { fetchBooks } from "./services/google-books-api.js";

function App() {
  // const testFetchBooks = async () => {
  //   try {
  //     const results = await fetchBooks("javascript");
  //     console.log("Fetched books:", results);
  //   } catch (error) {
  //     console.error("Error fetching books:", error);
  //   }
  // };

  return (
    <>
      <Header />
      <SearchForm />
      {/* <button
        onClick={testFetchBooks}
        style={{ margin: "20px", padding: "10px" }}
      >
        Test FetchBooks
      </button> */}
    </>
  );
}

export default App;
