import open from 'open';
import express from 'express';
// const sequelize = require('sequelize');
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

async function openURL(url) {
  try {
    await open(url);
    console.log(`Opened ${url} in the default browser.`);
  } catch (error) {
    console.error(`Error opening URL: ${error}`);
  }
}

app.use(express.json());
let shortUrl = '';
let longUrl = '';
app.post("/shorten", (req, res) => {
    longUrl = req?.body?.longurl;
    shortUrl = `tinyurl/` + longUrl.substring(4, 8);
    res.send(shortUrl);
});

app.get("/redirect", (req, res) => {
    console.log(req?.query?.code, ':::::', longUrl);
    if (req?.query?.code == shortUrl) {
        openURL(longUrl);
    }
})