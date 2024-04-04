import { db } from '../db/database.js'


//query for database creation
export const createDB = (req, res) => {
  let q = 'CREATE DATABASE todo';

  db.query(q, (err, result) => {
    if (err) throw err
    return res.status(200).json('DB created!')
  })
}


//query for table creation inside the created database
export const createTable = (req, res) => {
  let q =
    'CREATE TABLE tasks(id int AUTO_INCREMENT, newTask VARCHAR(1000), PRIMARY KEY(id))'

  db.query(q, (err, result) => {
    if (err) throw err
    return res.status(200).json('Table created!')
  })
}


//query for inserting the one by one task inside the table
export const createList = (req, res) => {
  let q = 'INSERT INTO tasks SET `newTask`=?'

  db.query(q, [req.body.newTask], (err, result) => {
    if (err) return res.json(err);
    return res.status(200).json(result);
  })
}


//query for get the all list of data from the table
export const viewTasks = (req, res) => {
  let q = 'SELECT * FROM tasks';

  db.query(q, (err, result) => {
    if (err) return res.json(err);
    return res.status(200).json(result);
  })
}


//query for delete the added task one by one
export const deleteTask = (req, res) => {
  let q = `DELETE FROM tasks WHERE id=${req.params.id}`;

  db.query(q, [req.body.newTask],(err, result) => {
    if (err) return res.json(err);
    return res.status(200).json(result);
  })
}
