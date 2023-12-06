const express = require('express');
const app = express();
const port = 3000; // You can change this to any port you prefer

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!'); // Respond with "Hello, World!" for requests to the root URL
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
