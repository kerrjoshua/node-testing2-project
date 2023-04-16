const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const guitarsRouter = require('./guitars/guitars-router')

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/guitars", guitarsRouter);

server.get("/", (req, res) => {
    res.json({ api: "up" })
})

server.use((err, req, res, next) => { 
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack,
    })
});

module.exports = server