import React, { useState } from 'react';
import './BookForm.css';
import Headers from './Headers';
import BookLists from './BookLists';

function BookForm() {
  const [books, setBooks] = useState([]);
  const [enteredBookName, setEnteredBookName] = useState('');
  const [enteredBookDetail, setEnteredBookDetail] = useState('');
  const [enteredAuthorName, setEnteredAuthorName] = useState('');
  const [enteredPublishDate, setEnteredPublishDate] = useState('');
  const [enteredPrice, setEnteredPrice] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [currentBookId, setCurrentBookId] = useState(null);

  const handleBookNameChange = (event) => {
    setEnteredBookName(event.target.value);
  };

  const handleBookDetailChange = (event) => {
    setEnteredBookDetail(event.target.value);
  };

  const handleAuthorNameChange = (event) => {
    setEnteredAuthorName(event.target.value);
  };

  const handlePublishDateChange = (event) => {
    setEnteredPublishDate(event.target.value);
  };

  const handlePriceChange = (event) => {
    setEnteredPrice(event.target.value);
  };

  const deleteBook = (id) => {
    const filteredBooks = books.filter((element) => element.id !== id);
    setBooks(filteredBooks);
  };

  const updateBook = (id) => {
    const bookToUpdate = books.find((book) => book.id === id);
    setEnteredBookName(bookToUpdate.bookName);
    setEnteredBookDetail(bookToUpdate.bookDetail);
    setEnteredAuthorName(bookToUpdate.authorName);
    setEnteredPublishDate(bookToUpdate.publishData);
    setEnteredPrice(bookToUpdate.price);
    setIsUpdating(true);
    setCurrentBookId(id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isUpdating) {
      const updatedBooks = books.map((book) =>
        book.id === currentBookId
          ? {
              id: currentBookId,
              bookName: enteredBookName,
              bookDetail: enteredBookDetail,
              authorName: enteredAuthorName,
              publishData: enteredPublishDate,
              price: enteredPrice,
            }
          : book
      );
      setBooks(updatedBooks);
      setIsUpdating(false);
      setCurrentBookId(null);
    } else {
      const bookInfo = {
        id: Math.floor(Math.random() * 100),
        bookName: enteredBookName,
        bookDetail: enteredBookDetail,
        authorName: enteredAuthorName,
        publishData: enteredPublishDate,
        price: enteredPrice,
      };
      setBooks([...books, bookInfo]);
    }

    setEnteredBookName('');
    setEnteredBookDetail('');
    setEnteredAuthorName('');
    setEnteredPublishDate('');
    setEnteredPrice('');
  };

  return (
    <div className="container">
      <div className="form">
        <Headers />

        <form onSubmit={handleSubmit}>
          <div className="labelInput">
            <label className="label">Book Name : </label>
            <input
              type="text"
              value={enteredBookName}
              onChange={handleBookNameChange}
              required
            />
          </div>

          <div className="labelInput">
            <label className="label">Book Detail : </label>
            <input
              type="text"
              value={enteredBookDetail}
              onChange={handleBookDetailChange}
              required
            />
          </div>

          <div className="labelInput">
            <label className="label">Author Name : </label>
            <input
              type="text"
              value={enteredAuthorName}
              onChange={handleAuthorNameChange}
              required
            />
          </div>

          <div className="labelInput">
            <label className="label">Publish Date : </label>
            <input
              type="date"
              value={enteredPublishDate}
              onChange={handlePublishDateChange}
              required
            />
          </div>

          <div className="labelInput">
            <label className="label">Price : </label>
            <input
              type="number"
              value={enteredPrice}
              onChange={handlePriceChange}
              required
            />
          </div>
          <button type="submit" className="addButton">
            {isUpdating ? 'Update Book' : 'Add Book'}
          </button>
        </form>
      </div>
      <BookLists books={books} deleteBook={deleteBook} updateBook={updateBook} />
    </div>
  );
}

export default BookForm;


