const express = require("express");
const userRoute = require("./routes/user.route")
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(userRoute)


module.exports = app;