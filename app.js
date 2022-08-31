const compression = require("compression");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// Router goes here

app.use(bodyParser.json());

app.use(cors());
app.use(compression());

// App.use router

app.listen(8080, () => {
    console.log("Server running on port 8080")
})