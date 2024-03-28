import React, {useState } from 'react';
import './BookForm.css';
import Headers from './Headers'
import BookLists from './BookLists';


function BookForm(){

  const [books, setBooks] = useState([]);
  const [enteredBookName, setEnteredBookName] = useState('');
  const handleBookNameChange =(event) => {
    setEnteredBookName(event.target.value);
  }; 

  const [enteredBookDetail, setEnteredBookDetail] = useState('');
  const handleBookDetailChange = (event) => {
    setEnteredBookDetail(event.target.value);
  };

  const [enteredAuthorName, setEnteredAuthorName] = useState('');
  const handleAuthorNameChange =(event) => {
    setEnteredAuthorName(event.target.value);
  };

  const [enteredPublishDate, setEnteredPublishDate] = useState('');
  const handlePublishDateChange =(event) => {
    setEnteredPublishDate(event.target.value);
  };
  const [enteredPrice, setEnteredPrice] = useState('');
  const handlePricechange =(event) => {
    setEnteredPrice(event.target.value)
  };
 
  
  // to delete book list
  const deleteBook = (id) => {
    const filteredBooks = books.filter((element) => element.id !== id);
    setBooks(filteredBooks);
  };

  const toStoreBookData = (event) => {
    event.preventDefault();
    const bookInfo = {
      id: Math.floor(Math.random() * 100),
      bookName: enteredBookName,
      bookDetail: enteredBookDetail,
      authorName: enteredAuthorName,
      publishData: enteredPublishDate,
      price: enteredPrice,
    };

    setBooks([...books, bookInfo]);
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

        <form onSubmit={toStoreBookData}>
          <div className="labelInput">
            <label className="label">Book Name : </label>
            <input
             type="text"
             value ={enteredBookName}
             onChange={handleBookNameChange}
             required />
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
              onChange={handlePricechange}
              required
            />
          </div>
          <button type="submit" className="addButton">
            Add Book
          </button>
        </form>
      </div>
      <BookLists books={books} deleteBook={deleteBook} />
    </div>
  );
}
export default BookForm;

