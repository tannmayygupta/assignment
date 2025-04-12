const axios = require('axios');

async function fetchAndStore() {
  const res = await axios.get('https://api.example.com/data');
  await Item.insertMany(res.data);
}
