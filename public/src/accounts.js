function findAccountById(accounts, id) {
  const result = accounts.find((account) => account.id === id);
  return result;
}

function sortAccountsByLastName(accounts) {
  const result = accounts.sort((nameA, nameB) =>
    nameA.name.last.toLowerCase() > nameB.name.last.toLowerCase() ? 1 : -1
  );
  return result;
}

function getTotalNumberOfBorrows(account, books) {
  //account.id === books.borrows.id
  const result = books.reduce(
    (total, book) =>
      total + book.borrows.filter((bookId) => bookId.id === account.id).length,
    0
  );
  return result;
}

function getBooksPossessedByAccount(account, books, authors) {
  // book.borrows.some(borrow => !borrow.returned && borrow.id === account.id) looks thru borrows and if returned is false and the id's match for any book it returns true
  //
  return books
    .filter(
      (book) => (book.borrows[0].id === account.id) & !book.borrows[0].returned
    )
    .map((book) => {
      book["author"] = authors.find((author) => author.id === book.authorId);
      return book;
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
