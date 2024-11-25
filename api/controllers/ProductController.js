const express = require("express");
const app = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

app.post("/create", async (req, res) => {
    try {
        const result = await prisma.product.create({
            data: req.body,
        });

        res.send({ result: result });
    } catch (e) {
        res.status(500).send({ error: e.message });
    }
});

module.exports = app;