const mongoose = require("mongoose");
const express = require("express");
const bodyparser = require("body-parser");

const DefaultRouter = require("./Router/Default");
const ExceptionRouter = require("./Router/Exception");
const ReservationRouter = require("./Router/Reservation");

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

mongoose.connect("mongodb://localhost:27017/Test1", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
// db.collection.dropIndexes()
db.once("open", () => {
  console.log("Database connection");
});

app.set("view engine", "ejs");
app.set("views", "view");

// app.use(express.static(path.join(__dirname, "public")));

app.use("/Default", DefaultRouter);
app.use("/Exception", ExceptionRouter);
app.use("/Reservation", ReservationRouter);

app.listen(3000, () => {
  console.log("Server is Runing");
});
