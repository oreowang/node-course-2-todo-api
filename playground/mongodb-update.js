// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//   db.collection('Todos').findOneAndUpdate({
//     _id: new ObjectID('58cf9ea7a5aa07cf898e16cd')
//   },{
//     $set: {
//       completed: true
//     }
//   },{
//   returnOriginal: false
// }).then((result) =>{
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('58cf8301ac0add09129ddf1a')
},{
  $set: {
    name: 'Ira'
  },
  $inc: {
    age: 1
  }
},{
returnOriginal: false
}).then((result) =>{
console.log(result);
});

  //db.close();
});
