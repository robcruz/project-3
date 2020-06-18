const mongoose = require('mongoose');
// Allow Promises
mongoose.Promise = global.Promise;
// Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/swap_me', { useNewUrlParser: true });
// mongodb://<dbuser>:<dbpassword>@ds011228.mlab.com:11228/heroku_mf311fz0
// Validation
mongoose.connection
  .once('open', () => console.log('Connected to the database!'))
  .on('error', err => console.log('Error with the database!', err));
