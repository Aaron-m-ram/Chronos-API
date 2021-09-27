const express = require("express");

const PORT = process.env.PORT || "3001";

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
  res.status(200).json({ name: "Aaron ", doing: "Coding" });
});

/** Start listening */
app.listen(PORT, () => {
  console.log(`Listening for requests on port ${PORT}`);
});
