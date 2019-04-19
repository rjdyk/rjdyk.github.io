const googleBooksKey = 'TODO';

let books_read = [
  {
    "title": "Creativity Inc",
    "author": "Ed Catmull",
    "img_link": "../images/books/Creativity_inc.jpg",
    "isbn": "9780553841220",
    "description": "One of my favorite books on positive leadership and the \
      importance of trust and candor in an organization trying to achieve \
      incredible things"
  },
  {
    "title": "Shoe Dog",
    "author": "Phil Knight",
    "isbn": "9781501150111",
    "description": "Coming Soon. . ."
  },
  {
    "title": "Outliers",
    "author": "Gladwell",
    "isbn": "9780316017930",
    "description": "Coming Soon. . ."
  },
  {
    "title": "Why We Sleep",
    "author": "Matthew Walker",
    "isbn": "9781501144325",
    "description": "Coming Soon. . ."
  },
  {
    "title": "The Third Door",
    "author": "Alex Banayan",
    "isbn": "9780804136662",
    "description": "Coming Soon. . ."
  },
  {
    "title": "Save the Cat",
    "author": "Blake Snyder",
    "isbn": "9781932907001",
    "description": "Coming Soon. . ."
  },
  {
    "title": "Never Split the Difference",
    "author": "Chris Voss",
    "isbn": "9781847941497",
    "description": "Coming Soon. . ."
  },
  {
    "title": "Logical Chess",
    "author": "Irving Chernev",
    "isbn": "9780713484649",
    "description": "Coming Soon. . ."
  },
  {
    "title": "The Goldfinch",
    "author": "Donna Tartt",
    "isbn": "9780316055444",
    "description": "Coming Soon. . ."
  },
    {
    "title": "Watership Down",
    "author": "Richard Adams",
    "isbn": "9780743277709",
    "description": "Coming Soon. . ."
  },
  {
    "title": "Bad Blood",
    "author": "John Carreyrou",
    "isbn": "9781524731656",
    "description": "Coming Soon. . ."
  },
  {
    "title": "Liar's Poker",
    "author": "Michael Lewis",
    "isbn": "9780393338690",
    "description": "Coming Soon. . ."
  },
  {
    "title": "When I Stop Talking You'll Know I'm Dead",
    "author": "Jerry Weintraud",
    "isbn": "9780446548168",
    "description": "Coming Soon. . ."
  },
  {
    "title": "Steve Jobs",
    "author": "Walter Isaacson",
    "isbn": "9781451648539",
    "description": "Coming Soon. . ."
  },


]

updateBookList();

function updateBookList() {
  var i = 0;
  books_read.forEach(function(book) {
    let title = book.title;
    let isbn = book.isbn;
    let description = book.description;
    let listing = '<div class="book">' +
                '<h1>' + title + '</h1>' + 
                '<img id="book_' +i+ '" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/387928/book%20placeholder.png">'
                '<p>' + description + '</p>' +
            '</div>'
    $('#read-grid').append(listing);
    getCover(i, isbn);
    i+=1;
  });
}

function getCover(idx, isbn){
  fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn + "&key=" + googleBooksKey, {
    method: 'get'
  })
  .then(response => { return response.json(); })
  .then(data => {
    var img = data.items[0].volumeInfo.imageLinks.thumbnail;
    img = img.replace(/^http:\/\//i, 'https://');
    console.log($('#book_' + idx));
    $('#book_' + idx).attr('src', img);
  })
  .catch(error => {
    console.log(error);
  });
}