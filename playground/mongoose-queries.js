const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '58d1183dc816cc2af041ff7711';
//
// if (!ObjectID.isValid(id)){
//   console.log('ID not valid');
// };

// Todo.find({
//   _id: id
// }).then((todos) =>{
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) =>{
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) =>{
//   if(!todo){
//     return console.log('ID not found');
//   }
//   console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

User.findById('58d0cdfc58b3b51bec8c4deb').then((user) =>{
  if(!user){
    return console.log('User not found');
  }

  console.log(JSON.stringify(user, undefined, 2));
}, (e) =>{
  console.log(e);
});
