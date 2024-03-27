import React, { useRef, useState } from 'react';
import './BookForm.css';
import Headers from './Headers'
import BookLists from './BookLists';


function BookForm(){

  const [books, setBooks] = useState([]);
  const enteredBookName = useRef();
  const enteredBookDetail = useRef();
  const enteredAuthorName = useRef();
  const enteredPublishDate = useRef();
  const enteredPrice = useRef();
 
  // to delete book list
  const deleteBook = (id) => {
    const filteredBooks = books.filter((element) => element.id !== id);
    setBooks(filteredBooks);
  };

  const toStoreBookData = (event) => {
    event.preventDefault();
    const bookInfo = {
      id: Math.floor(Math.random() * 100),
      bookName: enteredBookName.current.value,
      bookDetail: enteredBookDetail.current.value,
      authorName: enteredAuthorName.current.value,
      publishData: enteredPublishDate.current.value,
      price: enteredPrice.current.value,
    };

    setBooks([...books, bookInfo]);
    enteredBookName.current.value = '';
    enteredBookDetail.current.value = '';
    enteredAuthorName.current.value = '';
    enteredPublishDate.current.value = '';
    enteredPrice.current.value = '';

   
  };

  return (
    <div className="container">
      <div className="form">
        <Headers />

        <form onSubmit={toStoreBookData}>
          <div className="labelInput">
            <label className="label">Book Name : </label>
            <input type="text" ref={enteredBookName} required />
          </div>

          <div className="labelInput">
            <label className="label">Book Detail : </label>
            <input type="text" ref={enteredBookDetail} required />
          </div>

          <div className="labelInput">
            <label className="label">Author Name : </label>
            <input type="text" ref={enteredAuthorName} required />
          </div>

          <div className="labelInput">
            <label className="label">Publish Date : </label>
            <input type="date" ref={enteredPublishDate} required />
          </div>

          <div className="labelInput">
            <label className="label">Price : </label>
            <input type="number" ref={enteredPrice} required />
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

