import express from "express";
import pool from "../helpers/database.js";
const router = express.Router();

/* router.get("/:id", async function (req, res) {
  try {
    const sqlQuery =
      "SELECT id, Name, Date, Start, End, Seats, Reoccuring FROM events WHERE id=?";
    const rows = await pool.query(sqlQuery, req.params.id);
    return res.status(200).json(rows);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}); */

router.get("/table", async function (req, res) {
  try {
    const sqlQuery = " SELECT * FROM events";
    const table = await pool.query(sqlQuery, req.params.id);
    return res.status(200).json(table);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

router.post("/table", async function (req, res) {
  try {
    const singleEvent = req.body;
    const sqlQuery = `INSERT INTO events (id, Name, Date, Start, End, Seats, Reoccuring) VALUES (${singleEvent.id} ${singleEvent.Name} ${singleEvent.Date} ${singleEvent.Start} ${singleEvent.End} ${singleEvent.Seats} ${singleEvent.Reoccuring})`;
    const result = await pool.query(sqlQuery);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

export default router;
