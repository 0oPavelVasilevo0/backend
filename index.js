require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { default: mongoose } = require('mongoose');
const router = require('./router/index')
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', router);

const start = async () => {
   try {
      await mongoose.connect(process.env.DB_URL)
    app.listen( PORT, () => console.log(`server started on PORT 5000 = ${PORT}`) )
   } catch  (e) {
    console.log(e);
   }
}

start()