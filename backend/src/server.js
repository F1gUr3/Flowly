const express = require("express");
const app = express();
require('dotenv').config();

const port = process.env.PORT || 2999;

app.listen(port, () => {
    console.log("Listening on port: " + port);
})
