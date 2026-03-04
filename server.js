import express from "express";
import dotenv from "dotenv";
// import "./scheduler1.js";
import "./scheduler2.js";

const port = process.env.PORT || 5001;


dotenv.config();
const app = express();


// Middleware
app.use(express.json());



// start the server

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

