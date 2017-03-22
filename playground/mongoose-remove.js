const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) =>{
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '58d27f85a5aa07cf898e450d'}).then((todo) =>{
//
// });

Todo.findByIdAndRemove('58d27f85a5aa07cf898e450d').then((todo) =>{
  console.log(todo);
});
