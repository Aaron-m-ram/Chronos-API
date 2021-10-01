import express from "express";
import pool from "../helpers/database.js";
const router = express.Router();

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
    const sqlQuery =
      "INSERT INTO events (id, Name, Date, Start, End, Seats, Reoccuring) VALUES(?,?,?,?,?,?,?)";
    const result = await pool.query(sqlQuery, [
      singleEvent.id,
      singleEvent.Name,
      singleEvent.Date,
      singleEvent.Start,
      singleEvent.End,
      singleEvent.Seats,
      singleEvent.Reoccuring,
    ]);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

// /event/21321313
router.get("/:id", async (req, res) => {
  try {
    const sqlQuery =
      "SELECT id, Name, Date, Start, End, Seats, Reoccuring FROM events WHERE id=?";
    const rows = await pool.query(sqlQuery, req.params.id);
    return res.status(200).json(rows);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const sqlQuery = "DELETE FROM events WHERE id=?";
    const rows = await pool.query(sqlQuery, req.params.id);
    return res.status(200).json(rows);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const singleEvent = req.body;
    const { id } = req.params;
    console.log(singleEvent);
    console.log(singleEvent.Name);
    console.log(id);
    if (singleEvent.Name) {
      const sqlQuery = "UPDATE events SET Name = ? WHERE id=?";
      const rows = await pool.query(sqlQuery, [singleEvent.Name, id]);
      return res.status(200).send(rows);
    }
    if (singleEvent.Date) {
      const sqlQuery = "UPDATE events SET Date = ? WHERE id=?";
      const rows = await pool.query(sqlQuery, [singleEvent.Name, id]);
      return res.status(400).send(rows);
    }
    if (singleEvent.Start) {
      const sqlQuery = "UPDATE events SET Start = ? WHERE id=?";
      const rows = await pool.query(sqlQuery, [singleEvent.Name, id]);
      return res.status(400).send(rows);
    }
    if (singleEvent.End) {
      const sqlQuery = "UPDATE events SET End = ? WHERE id=?";
      const rows = await pool.query(sqlQuery, [singleEvent.Name, id]);
      return res.status(400).send(rows);
    }
    if (singleEvent.Seats) {
      const sqlQuery = "UPDATE events SET Seats = ? WHERE id=?";
      const rows = await pool.query(sqlQuery, [singleEvent.Name, id]);
      return res.status(400).send(rows);
    }
    if (singleEvent.Reoccuring) {
      const sqlQuery = "UPDATE events SET Reoccuring = ? WHERE id=?";
      const rows = await pool.query(sqlQuery, [singleEvent.Name, id]);
      return res.status(400).send(rows);
    }
  } catch {
    console.log("ERROR");
    return res.status(400).send(error.message);
  }
});

export default router;
