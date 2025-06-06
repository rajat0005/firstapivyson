const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});
app.use(express.json());
const jobTypes = [
    { id: 1, type: "Interior" },
    { id: 2, type: "Exterior" },
    { id: 3, type: "Roof" },
    { id: 4, type: "Renovations" },
    { id: 5, type: "Roof" },
];

app.post("/api/jobtypes", (req, res) => {
    const jobtype = { id: jobTypes.length + 1, type: req?.body?.type || null };
    jobTypes.push(jobtype);
    res.send(jobTypes);
});