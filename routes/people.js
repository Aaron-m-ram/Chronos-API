import express from "express";
import pool from "../helpers/database.js";
const routerPeople = express.Router();

routerPeople.get("/table", async function (req, res) {
  try {
    const sqlQuery = " SELECT * FROM people";
    const table = await pool.query(sqlQuery, req.params.id);
    return res.status(200).json(table);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

// /event/21321313
routerPeople.get("/:id", async (req, res) => {
  try {
    const sqlQuery =
      "SELECT id, name, rank, email, phoneNumber, ischecked FROM people WHERE id=?";
    const rows = await pool.query(sqlQuery, req.params.id);
    return res.status(200).json(rows);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

routerPeople.post("/table", async function (req, res) {
  try {
    const singlePerson = req.body;
    const sqlQuery =
      "INSERT INTO events (id, name, rank, email, phoneNumber, ischecked) VALUES(?,?,?,?,?,?)";
    const result = await pool.query(sqlQuery, [
      singlePerson.id,
      singlePerson.name,
      singlePerson.rank,
      singlePerson.email,
      singlePerson.phoneNumber,
      singlePerson.ischecked,
    ]);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

routerPeople.delete("/:id", async (req, res) => {
  try {
    const singlePerson = req.body;
    console.log(singlePerson);
    const sqlQuery = "DELETE FROM people WHERE id=? AND Email=?";
    const rows = await pool.query(sqlQuery, [
      singlePerson.id,
      singlePerson.Email,
    ]);
    return res.status(200).json(rows);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

export default routerPeople;
