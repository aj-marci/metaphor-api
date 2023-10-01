const express = require('express');
const cors = require('cors');
const {MetaphorClient} = require('metaphor-node');
const fetch = require('node-fetch'); // Import node-fetch

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

// Initialize the Metaphor SDK with your API key
const apiKey = 'd63cff0b-57d1-475a-a538-c7b2eda1183c';
const metaphor = new MetaphorClient(apiKey, { fetch });

// Define a route to fetch Metaphor search results
app.get('/metaphor-search', async (req, res) => {
  try {
    const query = 'Results from 2023 Ryder Cup';
    const searchOptions = {
      numResults: 10,
      startPublishedDate: '2023-10-01',
      // Add other search options as needed
    };

    // Use the Metaphor SDK to make a request
    const response = await metaphor.search(query, searchOptions);

    res.json(response);
  } catch (error) {
    console.error('Error fetching Metaphor API data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
