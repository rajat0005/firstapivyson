const express = require('express');
// const sequelize = require('sequelize');
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});
app.use(express.json());

app.post("/shorten", (req, res) => {
    const shortUrl = `tinyurl/`+req?.body?.longurl.substring(4,7);
    res.send(shortUrl);
});