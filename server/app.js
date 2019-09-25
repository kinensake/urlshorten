require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const urlRoute = require("./api/routes/url-route");
const Url = require("./api/models/url-model");

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true});
mongoose.connection.on("open", function() {
    console.log("success");
})

const app = express();
//middlwares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser(process.env.SECRET_KEY));
app.use(morgan("dev"));
//api
app.use("/api", urlRoute);

//redirect shortened url
app.get("/:id", (req, res) => {
    const { id } = req.params;
    Url.findOne({ shortenedUrlId: id })
    .then(data => {
        if (data && data.active) return res.redirect(data.originUrl);
        res.status(404).send("404 not found");
    })
    .catch(err => {
        console.log(err);
        throw err;
    })
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({err: "500 Internal Server Error"});
})

app.listen(3001);
