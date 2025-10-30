import React, { useState } from "react";
import "./styles.css"; // Make sure your styles.css file exists

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function searchBooks() {
    setLoading(true);
    setError("");
    setBooks([]);
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${searchTerm}`
      );
      const data = await response.json();
      if (data.docs.length === 0) setError("No books found.");
      setBooks(data.docs);
    } catch (e) {
      setError("Error searching books.");
    }
    setLoading(false);
  }

  return (
    <div className="container">
      <h1>Book Finder</h1>
      <input
        type="text"
        value={searchTerm}
        placeholder="Enter book title..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={searchBooks} disabled={loading}>
        {loading ? "Searching..." : "Search"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="results">
        {books.map((book) => (
          <div key={book.key} className="card">
            {book.cover_i ? (
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt="Book Cover"
                width={100}
              />
            ) : (
              <div className="no-cover">No Image</div>
            )}
            <h3>{book.title}</h3>
            <p>
              Author(s):{" "}
              {book.author_name ? book.author_name.join(", ") : "N/A"}
            </p>
            <p>Publisher: {book.publisher ? book.publisher[0] : "N/A"}</p>
            <p>Year: {book.first_publish_year || "N/A"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
