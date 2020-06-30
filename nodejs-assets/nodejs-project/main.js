var rn_bridge = require('rn-bridge');

// // Echo every message received from react-native.
// rn_bridge.channel.on('message', (msg) => {
//   rn_bridge.channel.send(msg);
// });

// // Inform react-native node is initialized.
// rn_bridge.channel.send('Node was initialized.');

// require('./server')(function () {
//   rn_bridge.channel.send('Dev app listening on port 3000!');
// });
const express = require('express');
const app = express();
const ng = require('ngrok');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Listen to port 3000
app.listen(3000, function () {

  rn_bridge.channel.send("hello");

});
