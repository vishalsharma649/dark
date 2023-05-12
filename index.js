const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = process.env.PORT || 3000;

// create a new database connection
const db = new sqlite3.Database('mydb.sqlite', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
});

app.get('/', (req, res) => {
  // execute a SELECT statement on the database
  db.all('SELECT * FROM vishal', (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Error retrieving data from database');
    } else {
      res.send(rows);
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
