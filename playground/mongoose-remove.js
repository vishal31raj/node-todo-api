const{ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result)
// });

// Todo.findByIdAndRemove('5c2dd10e7abadce9a4bd5127').then((todo) => {
//     console.log(todo);
// });

Todo.findOneAndRemove({_id : "5c2dd1ab7abadce9a4bd516b"}).then((todo) => {
    console.log(todo);
});