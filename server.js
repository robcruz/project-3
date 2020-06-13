const express = require('express');

const bodyParser = require('body-parser');
const socket = require('socket.io');

const path = require('path');
const items = require('./routes/itemsRoute');
const users = require('./routes/usersRoute')
require('./models/db');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('cors')());
app.use(require('helmet')());
app.use('/api/items', items);
app.use('/api/users', users);

// Production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendfile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

server = app.listen(PORT, () => console.log(`App running on port ${PORT}`)  );

io = socket(server);

io.on('connection', (socket) => {
  console.log(socket.id);

  socket.on('SEND_MESSAGE', function(data){
    io.emit('RECEIVE_MESSAGE', data);
  })
});
