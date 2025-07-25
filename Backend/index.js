const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnect } = require('./Config/dBConnect');
const authRoutes = require('./Routes/authRoutes');

const app = express();

app.use(express.json());

app.use(
    cors({
        origin:"https://bankyou-sewa-kendra.vercel.app",
        credentials:true
    })
)

PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server connected to PORT: ${PORT}`);
});

app.use("/api/v1/auth",authRoutes);

dbConnect();

app.use("/",(req,res) => {
    return res.json({
        success: true,
        message: "Your server is up and running"
    })
});

app.get('/healthz',(req,res) => {
    res.status(200).send('OK');
});