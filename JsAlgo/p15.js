const redis = require('redis');
const client = redis.createClient();

app.get('/data', async (req, res) => {
  client.get('data', async (err, cached) => {
    if (cached) return res.send(JSON.parse(cached));
    const freshData = await fetchData();
    client.setex('data', 60, JSON.stringify(freshData));
    res.send(freshData);
  });
});
