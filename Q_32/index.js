const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://<username>:<password>@cluster0.mongodb.net/mern-auth', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

const newUser = new User({
  name: 'Alice',
  email: 'alice@example.com',
  password: 'password123'
});

newUser.save().then(() => console.log('User added!'));
