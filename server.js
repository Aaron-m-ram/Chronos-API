import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: ".env-local" });

import cors from "cors";
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const PORT = process.env.PORT || "8001";

const app = express();

//to allow cors
app.use(cors(corsOptions));

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
      "This is not why you're here. Head to /user/:id and replace :id with your user id"
    );
});

import router from "./routes/events.js";
app.use("/event", router);

import routerPeople from "./routes/people.js";
app.use("/people", routerPeople);

/** Start listening */
app.listen(PORT, () => {
  console.log(`Listening for requests on port ${PORT}`);
});
