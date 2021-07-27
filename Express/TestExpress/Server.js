const express = require("express");
const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});
app.listen(8000 , () => console.log("connected to port 8000"));