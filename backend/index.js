const express = require("express");
require("dotenv").config();
const { connection } = require("mongoose");
const app = express();

app.use(express.json())

app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log("Connected to DB");
    } catch (error) {
        console.log(error.message);
    }
  console.log(`Server is running on port ${process.env.PORT}`);
})
