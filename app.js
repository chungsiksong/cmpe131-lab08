const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(__dirname));

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

//const server = app.listen(port, () => {
//  console.log(`Server listening at http://localhost:${port}`);
//});

// Export the server for testing purposes
//module.exports = server;

// Wrap the 'listen' call in a conditional
// This code only runs if the file is executed directly
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
}

// Export the app for testing purposes
module.exports = app; // Export the app, not the server