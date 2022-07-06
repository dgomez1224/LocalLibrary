function findAccountById(accounts, id) {
  const result = accounts.find(account => account.id === id);
  return result;
}

function sortAccountsByLastName(accounts) {
   const result = accounts.sort((nameA, nameB) => nameA.name.last.toLowerCase() > nameB.name.last.toLowerCase() ? 1 : -1 );
   return result;
}

function getTotalNumberOfBorrows(account, books) {
  //account.id === books.borrows.id
  const result = books.reduce((total, book) => total + book.borrows.filter(bookId => bookId.id === account.id).length, 0);
  return result;
}

function getBooksPossessedByAccount(account, books, authors) {
  //books.borrows.id === false
  //books.map(books possessed)
  //It returns an array of book objects, including author information, that represents all books _currently checked out_ by the given account. 
  //_Look carefully at the object below,_ as it's not just the book object; the author object is nested inside of it.
  const acc = account.id;
  const borrowed = books.filter(book => book.borrows.some(borrow => !borrow.returned && borrow.id === acc));
  borrowed.forEach(book => book.author = authors.find(author => book.authorId == author.id));
  return borrowed;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
