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

router.get("/:id", async (req, res) => {
  try {
    const sqlQuery =
      "SELECT id, name, date, start, end, seats, reoccuring, regBtn FROM events WHERE id=?";
    const rows = await pool.query(sqlQuery, req.params.id);
    return res.status(200).json(rows);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

router.post("/table", async function (req, res) {
  try {
    const singleEvent = req.body;
    const sqlQuery =
      "INSERT INTO events (id, name, date, start, end, seats, reoccuring, regBtn) VALUES(?,?,?,?,?,?,?,?)";
    const result = await pool.query(sqlQuery, [
      singleEvent.id,
      singleEvent.name,
      singleEvent.date,
      singleEvent.start,
      singleEvent.end,
      singleEvent.seats,
      singleEvent.reoccuring,
      singleEvent.regBtn,
    ]);

    return res.status(200).json(result);
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
    if (singleEvent.name) {
      const sqlQuery = "UPDATE events SET name = ? WHERE id=?";
      const rows = await pool.query(sqlQuery, [singleEvent.name, id]);
      //res.status(200).send(rows);
    }
    console.log("before date");
    if (singleEvent.date) {
      const sqlQuery = "UPDATE events SET date = ? WHERE id=?";
      const rows = await pool.query(sqlQuery, [singleEvent.date, id]);
      //res.status(200).send(rows);
    }
    if (singleEvent.start !== "") {
      const sqlQuery = "UPDATE events SET start = ? WHERE id=?";
      const rows = await pool.query(sqlQuery, [singleEvent.start, id]);
      //res.status(200).send(rows);
    }
    if (singleEvent.end) {
      const sqlQuery = "UPDATE events SET end = ? WHERE id=?";
      const rows = await pool.query(sqlQuery, [singleEvent.end, id]);
      //res.status(200).send(rows);
    }
    if (singleEvent.seats) {
      const sqlQuery = "UPDATE events SET seats = ? WHERE id=?";
      console.log("in seats");
      const rows = await pool.query(sqlQuery, [singleEvent.seats, id]);
      //res.status(200).send(rows);
    }
    if (singleEvent.reoccuring) {
      const sqlQuery = "UPDATE events SET reoccuring = ? WHERE id=?";
      const rows = await pool.query(sqlQuery, [singleEvent.reoccuring, id]);
      //res.status(200).send(rows);
    }
    if (singleEvent.regBtn) {
      const sqlQuery = "UPDATE events SET regBtn = ? WHERE id=?";
      const rows = await pool.query(sqlQuery, [singleEvent.regBtn, id]);
      res.status(200).send(rows);
    }
    //res.status(200);
  } catch {
    console.log("ERROR");
    return res.status(400).send(error.message);
  }
});

export default router;
