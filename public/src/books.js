function findAuthorById(authors, id) {
  const result = authors.find(author => author.id === id);
  return result; 
}

function findBookById(books, id) {
  const result = books.find(book => book.id === id);
  return result;
}

function partitionBooksByBorrowedStatus(books) {
  // create array with returned = true and array with returned = false
  //push arrays into arr
  let arr = [];
  const borrowed = books.filter(book => !book.borrows[0].returned);
  const returned = books.filter(book=> book.borrows[0].returned);
  arr.push(borrowed, returned);
  return arr;
  
}

function getBorrowersForBook(book, accounts) {
  let result = [];
  book.borrows.forEach(borrow=>{
    let account = accounts.find(acc => acc.id === borrow.id);
    account['returned'] =  borrow.returned;
    result.push(account);
  })
  return result.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
