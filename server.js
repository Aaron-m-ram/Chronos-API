const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: ".env-local" });

const PORT = process.env.PORT || "8001";

const app = express();

/**
 *  MIddleware
 */

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**
 * Routes
 */

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      "This is no why you're here. Head to /user/:id and replace :id with your user id"
    );
});

const eventsRouter = require("./routes/events");
app.use("/event", eventsRouter);

/** Start listening */
app.listen(PORT, () => {
  console.log(`Listening for requests on port ${PORT}`);
});
