const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 5000;

// Serve the React app (build) from a 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// API route to fetch data and handle CORS
app.get('/api/get-data', async (req, res) => {
  try {
    const response = await axios.get('https://signbase.onrender.com/get-all');

    // Set CORS headers to allow requests from your React app
    res.header('Access-Control-Allow-Origin', 'http://localhost:5174');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Serve the React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
