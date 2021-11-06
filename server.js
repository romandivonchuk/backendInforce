require("dotenv").config();

const express = require('express');
const connectDB = require('./config/db');
const productsRoutes = require('./routes/productsRoutes');
const cors = require('cors');

connectDB();


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));


app.use('/', cors(), productsRoutes);

app.listen(PORT, () => console.log(`server running on port ${PORT} `))
