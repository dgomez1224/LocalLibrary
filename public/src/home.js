function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  const borrowed = books.filter(book => !book.borrows[0].returned)
  return borrowed.length;
}

function getMostCommonGenres(books) {
  let genres = books.reduce((acc, book)=> {
    !acc.find(({name})=> name === book.genre) ? 
    acc.push({name : book.genre, count: 1} ) :
    acc[acc.findIndex(({name})=> name === book.genre)].count++;
    return acc;
  }, []);

  
  genres.sort((nameA,nameB)=> nameB.count - nameA.count);
  return genres.slice(0,5);

}

function getMostPopularBooks(books) {
  let popular = books.reduce((acc, book)=> {
   // [{name: name, count: #}]
    acc.push({name: book.title, count: book.borrows.length})
    return acc;
  }, []);

  
  popular.sort((nameA,nameB)=> nameB.count - nameA.count);
  return popular.slice(0,5);
}

function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach(author => {
    let writer = {
      name: `${author.name.first} ${author.name.last}`, count: 0
    };
    books.forEach(book=> {
      if(book.authorId === author.id){
        writer.count += book.borrows.length
      }
    });
    result.push(writer);
  });
  return result.sort((nameA,nameB) => nameB.count - nameA.count).slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
