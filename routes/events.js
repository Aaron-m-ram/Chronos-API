const express = require("express");
const pool = require("../helpers/database");
const router = express.Router();

router.get("/:id", async function (req, res) {
  try {
    const sqlQuery =
      "SELECT id, Name, Date, Start, End, Seats, Reoccurring FROM events WHERE id=?";
    const rows = await pool.query(sqlQuery, req.params.id);
    res.status(200).json(rows);
  } catch (error) {
    res.status(400).send(error.message);
  }
  res.status(200).json({ id: req.params.id });
});

module.exports = router;
