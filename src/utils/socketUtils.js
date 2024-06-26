// const socketio = require('socket.io');

// const initializeSocket = (server) => {
//   const io = socketio(server);

//   io.on('connection', (socket) => {
//     console.log('A user connected');

//     // Attach the socket instance to the request object
//     io.use((socket, next) => {
//       socket.request.io = io;
//       next();
//     });

//     socket.on('disconnect', () => {
//       console.log('A user disconnected');
//     });
//   });

//   return io;
// };

// module.exports = initializeSocket;

const socketio = require('socket.io');

const initializeSocket = (server) => {
  const io = socketio(server);

  io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });

  // Create a middleware function to attach the Socket.IO instance to the req object
  const socketMiddleware = (req, res, next) => {
    req.io = io;
    next();
  };

  return socketMiddleware;
};

module.exports = initializeSocket;