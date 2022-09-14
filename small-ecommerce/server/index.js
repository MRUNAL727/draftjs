const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
dotenv.config();

app.listen(process.env.PORT, console.log(`Running on PORT no ${process.env.PORT}`))