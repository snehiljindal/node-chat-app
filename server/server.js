const path = require("path");
const express = require('express');
const port = 3000 || process.env.Port;
const publicPath = path.join(__dirname,'../public') ;
var app = express();

app.use(express.static(publicPath));

app.listen(port,() => {
    console.log(`server is up on ${port}`);
});


