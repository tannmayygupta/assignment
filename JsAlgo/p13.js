const axios = require('axios');
const cheerio = require('cheerio');

async function scrape(url) {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  $('h1').each((i, el) => console.log($(el).text()));
}
