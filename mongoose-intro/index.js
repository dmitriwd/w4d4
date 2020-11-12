const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  pages: Number,
  releaseDate: Date,
  isAvailable: Boolean,
  genre: String
});

// A more complex schema
/*
const complexBookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  author: {
    type: String,
    maxLength: 50
  },
  pages: {
    type: Number,
    min: 150,
    max: 1500
  },
  releaseDate: {
    type: Date
  },
  isAvailable: {
    type: Boolean,
    default: true
  },
  genre: {
    type: String,
    enum: ['Drama', 'Spiritual', 'Romance', 'Manual']
  }
});
*/

const Book = mongoose.model('Book', bookSchema); // Creates a book collection; Tells Mongoose to use the bookSchema

mongoose
  .connect('mongodb://localhost:27017/node-mongoose-introduction', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('Mongoose successfully connected to our database! 📚');
    //return mongoose.connection.dropDatabase();
  })
  .then(() => {
    console.log('Database Cleared! 🧹');
    // return Book.create({
    //   title: 'Filipe"s Mongoose Adventure',
    //   author: 'Filipe Freire',
    //   pages: 150,
    //   releaseDate: new Date(2020, 11, 12),
    //   isAvailable: true,
    //   genre: 'Drama'
    // });
  })
  .then(() => {
    //console.log('This is our newly created book: ', book);
    return Book.find({ pages: 1000 });
  })
  .then(foundBooks => {
    console.log('We found these books for you: ', foundBooks);
    return Book.findById('5fad4109b59c5110bdae480e');
  })
  .then(bookFoundWithId => {
    console.log('Book found with the specified ID: ', bookFoundWithId);
    return Book.findOne({ pages: 200 });
  })
  .then(returnedBook => {
    console.log('Book returned with findOne method: ', returnedBook);
    return Book.findByIdAndUpdate(
      '5fad40c4fee5ae10716845b4',
      { genre: 'Spiritual' },
      { new: true }
    );
  })
  .then(updatedBook => {
    console.log('Our updated book: ', updatedBook);
    return Book.findOneAndUpdate(
      { author: 'Filipe Freire' },
      { isAvailable: false },
      { new: true }
    );
  })
  .then(updatedBook => {
    console.log('Newly updated book: ', updatedBook);
    // return Book.findByIdAndDelete
    return Book.findOneAndDelete({ isAvailable: false });
  })
  .then(deletedBook => {
    console.log("The following book isn't available no more! ", deletedBook);
  })
  .catch(error => {
    console.log('Oh no! Something unexpected has occurred! 😲', error);
  });
