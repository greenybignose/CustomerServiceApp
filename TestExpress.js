// Importing express 
const express = require('express');
  
// Creating new express app 
const app = express();
  
// PORT configuration
const PORT = 5000;
  
// IP configuration
// const IP = process.env.IP || 159.203.39.197;
  
// Create a route for the app
app.get('/', (req, res) => {
  res.send('Hello Vikas_g from geeksforgeeks!');
});
  
// Create a route for the app
app.get('*', (req, res) => {
  res.send('OOPS!! The link is broken...');
});
  
// Server listening to requests
app.listen(5000, 'testprog', () => {
//  console.log(`The Server is running at: 
 //         http://localhost:${PORT}/`);
});

