const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//   db.collection('Todos').findOneAndDelete({completed : true}).then((res) => {
//     console.log(res);
//   });

//   db.collection('Todos').deleteOne({text : "Eat lunch"}).then((res) => {
//     console.log(res);
//   });

  db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((res) => {
    console.log(res);
  });

});
