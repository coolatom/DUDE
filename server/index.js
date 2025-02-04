const express = require("express");
const cors = require("cors");
const compression = require("compression");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const app = express();

require("dotenv").config();

app.use(compression());
app.use(cors());
app.use(express.json());
app.use("/api/auth",userRoutes)

mongoose.set('strictQuery', true);
mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB connection successfull!");
    })
    .catch((err) => {
      console.log(err.message);
    });

const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT ${process.env.PORT}`);
});