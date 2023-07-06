import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import authrouter from "./routes/authRoute.js";

//configure env
dotenv.config();

//rest object
const app = express();

//middelwares
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/user", authrouter);
//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

// port
const PORT = process.env.PORT || 4000;

// connect to db
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // listening for requests
    app.listen(PORT, (req, res) => {
      console.log(`connected to db && server running on port:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });