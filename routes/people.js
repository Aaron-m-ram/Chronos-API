import express from "express";
import pool from "../helpers/database.js";
import { v4 as uuidv4 } from "uuid";
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
      "SELECT id, name, rank, email, phoneNumber, ischecked, uuid FROM people WHERE id=?";
    const rows = await pool.query(sqlQuery, req.params.id);
    return res.status(200).json(rows);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

routerPeople.post("/table", async function (req, res) {
  try {
    const singlePerson = req.body;
    const uuid = uuidv4();
    const sqlQuery =
      "INSERT INTO people (id, name, rank, email, phoneNumber, ischecked, uuid) VALUES(?,?,?,?,?,?,?)";
    const result = await pool.query(sqlQuery, [
      singlePerson.id,
      singlePerson.name,
      singlePerson.rank,
      singlePerson.email,
      singlePerson.phoneNumber,
      singlePerson.ischecked,
      uuid,
    ]);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

/* routerPeople.delete("/:id/:email", async (req, res) => {
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
}); */

routerPeople.delete("/:id/:uuid", async (req, res) => {
  try {
    //const singlePerson = req.body;
    //console.log(singlePerson);
    const sqlQuery = "DELETE FROM people WHERE uuid=?";
    const rows = await pool.query(sqlQuery, req.params.uuid);
    return res.status(200).json(rows);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

routerPeople.patch("/:id", async (req, res) => {
  try {
    const singleEvent = req.body;
    const { id } = req.params;
    const { email } = req.params;
    if (singleEvent.ischecked) {
      const sqlQuery =
        "UPDATE people SET ischecked = ? WHERE id=? AND email=? ";
      const rows = await pool.query(sqlQuery, [
        singleEvent.ischecked,
        id,
        email,
      ]);
      res.status(200).send(rows);
    }
  } catch {
    console.log("ERROR");
    return res.status(400).send(error.message);
  }
});
export default routerPeople;
