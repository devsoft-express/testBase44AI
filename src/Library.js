import React, { useState } from 'react';

function Library() {
  const [books, setBooks] = useState([]);
  const [bookName, setBookName] = useState('');

  const addBook = () => {
    if (bookName) {
      setBooks([...books, bookName]);
      setBookName('');
    }
  };

  return (
    <div>
      <h2>Manage Books</h2>
      <input
        type="text"
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
        placeholder="Add a new book"
      />
      <button onClick={addBook}>Add Book</button>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
    </div>
  );
}

export default Library;