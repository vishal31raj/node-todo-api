const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//   db.collection('Todos').findOneAndUpdate({
//       _id : new ObjectID('5c2030b7a6b1160b74d1d8cd')
//   }, {
//       $set: {
//           completed : true
//       }
//   }, {
//     returnOriginal : false
//   }).then((res) => {
//       console.log(res);
//   });

  db.collection('Users').findOneAndUpdate({
     _id : new ObjectID('5c2030315633d94e7c0cb01f') 
  }, {
      $set: {
          name : 'Vishal'
      },
      $inc: {
          age : 1
      }
  }, {
      returnOriginal : false
  }).then((res) => {
      console.log(res);
  });

});
